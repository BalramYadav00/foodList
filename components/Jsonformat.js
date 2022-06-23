import {
  Modal,
  StyleSheet,
  Text,
  View,
  BackHandler,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

const Jsonformat = ({ showJsonHandler, showJson, data }) => {
  React.useEffect(() => {
    const backAction = () => {
      showJsonHandler;
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return (
    <Modal animationType="slide" transparent={false} visible={showJson}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            backgroundColor: "#FFFFFF",
            width: "100%",
          }}
        >
          <View
            style={{
              elevation: 2,
              height: 80,
              justifyContent: "center",
              borderEndColor: "white",
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 25, fontWeight: "900" }}
            >
              Final Food List
            </Text>
          </View>
          <ScrollView
            style={{
              padding:10,
              width: "90%",
              maxHeight:"83%",
              alignSelf: "center",
              backgroundColor: "#eae8e8",
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              [
              {data.map((item) => (
                <>
                  <Text>{"{"}</Text>
                  <Text>
                    {"\n"}name:{item.name}
                  </Text>
                  <Text>
                    {"\n"}price:{item.price}
                  </Text>
                  <Text>{"\n}, "}</Text>
                </>
              ))}
              <Text>]</Text>
            </Text>
          </ScrollView>
        </View>
        <TouchableOpacity
          onPress={showJsonHandler}
          activeOpacity={0.8}
          style={styles.BottomButton}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "800",
              color: "white",
              paddingTop: 6,
              textAlign: "center",
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default Jsonformat;

const styles = StyleSheet.create({
  BottomButton: {
    width: "90%",
    height: 40,
    alignSelf:"center",
    position:"absolute",
    bottom: 10,
    borderWidth: 2,
    borderColor: "#48ca8b",
    backgroundColor: "#03b660",
    borderRadius: 5,
  },
});
