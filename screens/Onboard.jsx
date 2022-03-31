import { View, Text , ImageBackground} from 'react-native'
import React from 'react'
import Button from '../components/Button'

export default function Onboard({navigation}) {
  return (
    <ImageBackground source={require('../assets/onboard-bg.png')} style={{ flex: 1,  flexDirection:"column", justifyContent:"flex-end"}}>
      <View style={{padding: 40}}>
        <Text style={{ color: "#fff", fontSize: 40, fontWeight: "700" }}>Find a Perfect Job Match.</Text>
        
        <Text style={{ color: "#ccc", lineHeight: 25, fontSize: 15, fontWeight: "500", marginVertical: 30 }}>One place with the best jobs companies tech. Apply to all of them with a signle profile and get in touch with hiring managers directly.</Text>
        
        <View style={{width: 150}}>
           <Button onPress={()=>navigation.navigate("Home")}>
          Get Started
        </Button>
       </View>
      </View>
    </ImageBackground>
  )
}