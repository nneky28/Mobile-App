import { View, Text, Platform, NativeModules } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

export default function AppBar({ title = "", isBack = false }) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        height: 80,
        flexDirection: "row",
        paddingHorizontal: 20,
        marginTop: STATUSBAR_HEIGHT,
        position: "relative",
      }}
    >
      {isBack ? (
        <Ionicons
          onPress={() => {
            navigation.goBack();
          }}
          name="chevron-back-outline"
          size={32}
          color="black"
        />
      ) : (
        <Ionicons name="menu-outline" size={32} color="black" />
      )}

      <Text
        style={{
          fontWeight: "600",
          position: "absolute",
          textAlign: "center",
          left: "50%",
        }}
      >
        {title}
      </Text>

      {!isBack ? (
        <Ionicons name="person-outline" size={24} color="black" />
      ) : (
        <View />
      )}
    </View>
  );
}
