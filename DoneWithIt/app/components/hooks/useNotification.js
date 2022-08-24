

import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'
import { useEffect, useState } from 'react'
import expoPushTokensApi from '../api/expoPushTokens'
import logger from '../utility/logger'

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: true,
//   }),
// });
export default useNotification = (notificationListener) => {
  const [not,setNot] = useState()
    useEffect(() => {
        //registerPushNotifications();
        //showNotification();
      
        Notifications.addNotificationReceivedListener(notification => {
          setNot(notification)
        });      

       
      }, [])
      
      
      const registerPushNotifications = async () => {
        try {
          const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert(t('no_access_push_notifications'));
            return;
          }
  
          const token = await Notifications.getExpoPushTokenAsync();
          logger.log("data-token",token)
          Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.MAX,
            sound : true,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        
            expoPushTokensApi.register(token);
        } catch (error) {
          logger.log("Error getting a push token", error);
        }
      }
}