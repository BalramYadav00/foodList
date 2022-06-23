import {
  StyleSheet,
  Text,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

const AddPopUp = ({ show, showHandler, updateData, data, editid, editHandler }) => {
  React.useEffect(() => {
    data.filter((item) => item.id == editid? setfoodName(item.name):"");
    data.filter((item) => item.id == editid ? setfoodPrice(item.price): "");
  }, [editid]);
  const [foodName, setfoodName] = useState("");
  const [foodPrice, setfoodPrice] = useState("");
  return (
    <Modal animationType="slide" transparent={true} visible={show}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#000000AA",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            backgroundColor: "#FFFFFF",
            width: "100%",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                width: "88%",
                fontSize: 20,
                fontWeight: "900",
                padding: 10,
              }}
            >
              Add Food
            </Text>
            <TouchableOpacity
              onPress={showHandler}
              style={{ flexDirection: "row-reverse" }}
            >
              <Feather
                style={{ margin: 10 }}
                name="x"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ color: "#787878", fontWeight: "600" }}>
              Food Name
            </Text>
            <TextInput
              style={{
                height: 40,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#808080",
                paddingLeft: 10,
                paddingRight: 10,
              }}
              value={foodName}
              onChangeText={(text) => setfoodName(text)}
            />
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ color: "#787878", fontWeight: "600" }}>
              Food Price
            </Text>
            <TextInput
              style={{
                height: 40,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#808080",
                marginTop: 10,
                paddingLeft: 10,
                paddingRight: 10,
              }}
              value={foodPrice}
              onChangeText={(num) => setfoodPrice(num)}
            />
          </View>
          <View
            style={{
              margin: 10,
              borderRadius: 5,
              borderWidth: 2,
              overflow: "hidden",
              borderColor: "#66d29d",
            }}
          >
            <Button
              color="#03b660"
              title={editid == null ? "Add Food": "Edit Food"}
              onPress={() => { editid !=null ? editHandler(editid, foodName, foodPrice):
                updateData({
                  id: Object.keys(data).length + 1,
                  name: foodName,
                  price: foodPrice,
                });
                setfoodName("");
                setfoodPrice("");
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddPopUp;
