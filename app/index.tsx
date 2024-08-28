import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Link href={"/(tabs)"}>Go to Tabs</Link>
      <Link href={"/(drawer)"}>Go to Drawer</Link>
      <Link href={"/(modal)"}>Open Modal</Link>
      <Link href={"/(dynamic)/1"}>Dynamic Route ID</Link>
      <Link href={"/(tabs)/explore"}>Go to Nested Route Tabs Explore </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
