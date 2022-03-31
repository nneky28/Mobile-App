import { Ionicons } from "@expo/vector-icons";
import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import Button from "./Button";
import CompanyCard from "./CompanyCard";


export default function HomeListHeader({companies=[]}) {


  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 36 }}>Hi Nneka,</Text>
      <Text style={{ fontSize: 36 }}>Find your Dream Job</Text>

      <View
        style={{
          flexDirection: "row",
          marginVertical: 30,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            position: "relative",
            flex: 0.75,
            justifyContent: "center",
          }}
        >
          <TextInput
            style={{
              backgroundColor: "#fff",
              borderRadius: 15,
              padding: 25,
              paddingLeft: 45,
              fontSize: 15,
            }}
            placeholder="Search for jobs"
          />

          <Ionicons
            name="search"
            size={20}
            color="black"
            style={{ position: "absolute", left: 15 }}
          />
        </View>

        <View style={{ flex: 0.2 }}>
          <Button background="#000">
            <Ionicons name="options" size={24} color="#fff" />
          </Button>
        </View>
      </View>

      <Text style={{ color: "#333", fontWeight: "600", marginBottom: 10 }}>
        Popular Company
      </Text>

      <ScrollView horizontal>
        {companies.map((items, index) => (
          <CompanyCard
          {...items}
           />
        ))}
      </ScrollView>

      <Text style={{ color: "#333", fontWeight: "600" , marginVertical:30}}>
        Recent Jobs
      </Text>
    </View>
  );
}
