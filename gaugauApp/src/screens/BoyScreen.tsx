import * as React from 'react' 
import * as Notifications from 'expo-notifications';   
import styled from 'styled-components'
import { View, Text, TouchableOpacity } from 'react-native'
import { Button, Header, Input } from 'react-native-elements';

const Page = styled(View)`
    padding: 40px 30px 0 30px;
` 
const Heading = styled(Text)`
    text-align: center;
    font-size: 20px;
    margin-bottom: 16px;
    font-weight: bold;
`
Sync function setNotificationHandler(){
  const {status} = await Notifications.getPermissionsAsync()
  if(status != 'granted'){
    const {status} = await Notifications.requestPermissionsAsync()
    if(status != 'granted'){
      alert('failed to get notifications token')
      return
    }
  }

  const tokenData = await Notifications.getExpoPushTokenAsync()
  const token = tokenData.data
  console.log( {token})
  return token


}
const BoyScreen: React.FC = () => {
    return(
        <View>
         <Header
      backgroundColor="blue"
      backgroundImageStyle={{}}
      barStyle="default"
      centerComponent={{
        text: 'Xin chào Đinh Trường 🧑‍🦰',
        style: { color: "#fff" }
      }}
      centerContainerStyle={{}}
      containerStyle={{ width: 400 }}
      leftComponent={{ icon: "menu", color: "#fff" }}
      leftContainerStyle={{}}
      linearGradientProps={{}}
      placement="center"
      rightComponent={{ icon: "home", color: "#fff" }}
      rightContainerStyle={{}}
      statusBarProps={{}}
    />   
      <Page>
        <Heading>
          Bạn chưa có mã số, bấm vào đây để lấy mã!
        </Heading>
        <Button title="Bấm vào đây để lấy mã số" onPress={getNotificationToken}/>
        </Page>      
        </View>
    )
}

export default BoyScreen