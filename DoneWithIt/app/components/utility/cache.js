import {AsyncStorage} from '@react-native-async-storage/async-storage'
import dayjs from "dayjs"
import logger from './logger'
const store = async(key,value) => {
    try {
        const item = {
            value,
            // timestamp = Date.now()
        }
        await AsyncStorage.setItem(key, JSON.stringify(item))
    } catch (error) {
        console.log(error);
    }
}

const isExpired = (item) => {
    const now = dayjs();
    const storedTime = dayjs(item.timestamp);
    return now.diff(storedTime,'minute') > 5;
}
const get = async(key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        const item = JSON.parse(value)

        if(!item) return null;
        if(isExpired(item)) {
            await AsyncStorage.removeItem(key);
            return null;
        }

        return item.value;

        
    } catch (error) {
        logger.log(error);

    }
}

export default{
    store,
    get
}