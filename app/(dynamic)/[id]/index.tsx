import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const index = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Dynamic id : {id}</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
