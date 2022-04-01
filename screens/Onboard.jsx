import { View, Text , ImageBackground, TouchableOpacity} from 'react-native'
import React from 'react'
import Button from '../components/Button'

export default function Onboard({navigation}) {
  return (
    <ImageBackground source={require('../assets/onboard-bg.png')} style={{ flex: 1, flexDirection:"column", justifyContent:"flex-end"}}>
      <View style={{padding: 40, paddingVertical: 5,}}>
        <Text style={{ color: "#fff", fontSize: 40, fontWeight: "700" }}>Find a Perfect Job Match.</Text>
        
        <Text style={{ color: "#ccc", lineHeight: 25, fontSize: 15, fontWeight: "500", marginVertical: 20 }}>One place with the best jobs companies tech. Apply to all of them with a signle profile and get in touch with hiring managers directly.</Text>
        
        <View 
          style={{width: 150 ,
           flexDirection: "row",
          justifyContent: "space-between",
          alignItems:"flex-start",
          }}>

           <Button 
           onPress={()=>navigation.navigate("Home")}>
          Get Started
        </Button>

        <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
            <Text style={{  marginTop:20, marginLeft:90,
          color: "#fff",
          fontSize: 15,
          fontWeight: "700", }}>Skip</Text>
          </TouchableOpacity> 
       </View>

      </View>
    </ImageBackground>
  )
}