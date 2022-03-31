import { View } from "react-native";
import React,{useState, useEffect} from "react";
import { Entypo } from "@expo/vector-icons";
import {
  Platform,
  NativeModules,
  Text,
  TouchableHighlight,
  FlatList,
  Image,
} from "react-native";
import AppBar from "../components/AppBar";
import HomeListHeader from "../components/HomeListHeader";

function HomeScreen({ navigation }) {

  
  const [companies, setCompanies] = useState([])

  const getCompanies = ()=>{

    fetch('https://remotive.io/api/remote-jobs?limit=10')
    .then( response => response.json())
    .then(json => {
        setCompanies(json.jobs);
        // console.log('jobs', json)
      })
    }
    
    
  
  useEffect(() => {
    getCompanies();
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: "#eee" }}>
      <AppBar />

      <FlatList
        data={companies}
        keyExtractor={(item, index) => index}
        ListHeaderComponent={<HomeListHeader 
            companies={companies}
           
           />}

           

        ItemSeparatorComponent={() => <View style={{ paddingVertical: 10 }} />}
        
        renderItem={({ item }) => (
          <View style={{ paddingHorizontal: 20 }}>
            <TouchableHighlight
              style={{
                padding: 20,
                backgroundColor: "#fff",
                borderRadius: 15,
              }}
              key={item.key}
              onPress={() => {
                navigation.navigate("JobDetail", {
                  company_name: item.company_name,
                  item: item,

                  // check 
                });
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={{ uri: item.company_logo }}
                    
                    style={{
                      height: 50,
                      width: 50,
                      resizeMode: "contain",
                      borderRadius: 5,
                      overflow: "hidden",
                      marginRight: 10,
                    }}
                  />

                  <View>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "600",
                        marginTop: 10,
                        width: 200
                      }}
                      numberOfLines={2}
                    >
                      {item.title}

                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 2,
                      }}
                    >
                      <Text
                        style={{
                          color: "#ccc",
                          fontSize: 10,
                          fontWeight: "600",
                        }}
                      >
                        {item.company_name}
                      </Text>

                      <Entypo name="dot-single" size={18} color="#ccc" />

                      <Text
                        style={{
                          color: "#ccc",
                          fontSize: 10,
                          fontWeight: "600",
                        }}
                      >
                        {item.job_type}
                      </Text>
                    </View>
                  </View>
                </View>

                <Entypo name="dots-three-vertical" size={18} color="#000" />
              </View>
            </TouchableHighlight>
          </View>
        )}
      />
    </View>
  );
}

export default HomeScreen;
