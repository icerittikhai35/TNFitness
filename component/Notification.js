import PushNotification  from "react-native-push-notification";
import { Platform } from "react-native";

export default function Notification() {
    configure =() =>{
        PushNotification.configure({
            onRegister: function(token){
                console.log("[Notification] onRegister TOKEN:",token);
            },
            onNotification: function(notification){
                console.log("[Notification] onNOTIFICATION:",notification);
            },
        })
    }
}