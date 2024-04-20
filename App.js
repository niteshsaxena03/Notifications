import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Notifications from "expo-notifications";

export default function App() {
  function scheduleNotificationHandler(){
    Notifications.scheduleNotificationAsync({
      content:{
        title:'Testing notification',
        body:"testing body",
        data:{username:'Nitesh'}
      },
      trigger:{
        seconds:5,
      }
    })
  }
  return (
    <View style={styles.container}>
      <Button title="Schedule Notification" onPress={scheduleNotificationHandler}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
