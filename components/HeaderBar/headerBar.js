import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function headerBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.leftIcon}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            source={require("./menu.png")}
            style={{ width: 30, height: 30, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.centerElement}>
        <Image
          style={styles.logo}
          source={require("./Rick_and_Morty_logo.png")}
        />
      </View>

      <View style={styles.rightIcon}>
        <TouchableOpacity
          onPress={() => navigation.navigate("FilterScreen")}
          style={{ width: 50, height: 50, marginLeft: 10 }}
        >
          <Image
            style={styles.filterIcon}
            source={require("./filter_icon.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
