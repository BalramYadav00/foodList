import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const RenderItem = ({ item, id, deleteHandler,editidHandler }) => {
  return (
    <View style={styles.item}>
      <Entypo name="dots-three-vertical" size={20} color="grey" />
      <Entypo
        style={{ position: "absolute", paddingLeft: 10 }}
        name="dots-three-vertical"
        size={20}
        color="grey"
      />
      <View style={styles.itemDetails}>
        <Text style={{paddingLeft:10}}>{item.name}</Text>
        <Text style={{ textAlign: "right" }}>{item.price}</Text>
      </View>
      <View style={styles.itemIcons}>
        <TouchableOpacity onPress={() => editidHandler(id)}>
          <Octicons name="pencil" size={20} color="#717171" />
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => deleteHandler(id)}>
          <MaterialIcons name="delete" size={20} color="#717171" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    minHeight: 40,
    alignItems: "center",
    padding: 0,
    alignSelf: "center",
    width: "90%",
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 7,
    borderColor: "grey",
    backgroundColor: "#f4f4f4",
  },
  itemDetails: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 5,
    marginHorizontal: 5,
    justifyContent: "space-between",
  },
  itemIcons: {
    flex: 1,
    maxWidth: "25%",
    flexDirection: "row",
    borderLeftWidth: 2,
    paddingVertical: 10,
    borderColor: "grey",
    padding: 10,
    justifyContent: "space-between",
  },
});
