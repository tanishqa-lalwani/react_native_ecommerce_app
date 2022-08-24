import React,{useState} from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';
import ListItemDeleteAction from './ListItemDeleteAction';
import ListItemSeperator from './ListItemSeperator';
import Screen from './screens/Screen';

const initialMessages = [
    {
        id : 1,
        title : "Mosh",
        subtitle : "T1",
        image : require("../../assets/mosh.jpg")
    },
    {
        id : 2,
        title : "Mosh",
        subtitle : "T2",
        image : require("../../assets/mosh.jpg")
    }
]
function MessagesList(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);


    const handleDelete = (message) => {
        // Delete the message from messages
        setMessages(messages.filter((m) => m.id !== message.id));
      };
    return (
        <Screen>

            <FlatList
            data = {messages}
            keyExtractor = {(message)=> message.id.toString()}
            renderItem={({item})=>(
            <ListItem title = {item.title} listing = {item.subtitle} image = {item.image} onPress = {()=>console.log()}
            renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          )}
             ItemSeparatorComponent = {ListItemSeperator}
             refreshing = {refreshing}
             onRefresh = {()=>{
                 setMessages([
                    {
                        id : 2,
                        title : "Mosh",
                        subtitle : "T2",
                        image : require("../../assets/mosh.jpg")
                    },

                 ])

             }}
            />
        </Screen>
    );
}

export default MessagesList;