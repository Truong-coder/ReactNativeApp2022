import * as React from 'react'    
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
const ButtonContainer = styled(View)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`
const SummonButton = styled(TouchableOpacity)<{color?: string}>`
    background-color: ${p => p.color || 'red'};
    flex: 48% 0 0;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 10px;
    display: flex;
    height: 150px;
    align-items: center;
    justify-content: center;
    color: white;
`
const SummonButtonText = styled(Text)<{color?: string}>`
    color: ${p => p.color || 'white'};
    font-size: 18px;
    text-align: center;
`
const GirlScreen: React.FC = () => {
    return(
    <View> 
            <Header
      backgroundColor="pink"
      backgroundImageStyle={{}}
      barStyle="default"
      centerComponent={{
        text: 'Xin chào Thùy Linh 👩‍🦰',
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
            <View>
            <Input label="Nhập dãy số thần kì để triệu hồi  Đinh Trường nhé!" placeholder='Nhập mã số vào đây!'/>
            <Button title="Xác nhận mã số" />
            </View>
    


            <View style = {{margin:20}}> 
             <Heading>Triệu hồi Đinh Trường!</Heading> 
              <ButtonContainer>
                <SummonButton color ="#FFF8DC">
                <SummonButtonText color ="#FF4500">Bạn có hẹn với mình đó!💕</SummonButtonText>
                </SummonButton> 
              

              
                <SummonButton color ="#00FFFF">
                <SummonButtonText>Bạn đi ăn với mình nhé!🍚</SummonButtonText>
                </SummonButton>
                 

                <SummonButton color ="#696969">
                <SummonButtonText>Mình cảm thấy không khỏe!🤒</SummonButtonText>
                </SummonButton>
            

             
                <SummonButton color ="#008000" >
                <SummonButtonText>Bạn đến đón mình nhé!🛵</SummonButtonText>
                </SummonButton>
            </ButtonContainer>
      </View>
    </Page>
</View>
         

  
 
         
      
     
    )
}
export default GirlScreen