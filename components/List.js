import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Animated, {
  cancelAnimation,
  runOnJS,
  scrollTo,
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

function MovableSong({ id, name, price, positions, scrollY, itemCount }) {
  const dimensions = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [moving, setMoving] = useState(false);
  const top = useSharedValue(positions.value[id] * SONG_HEIGHT);

  useAnimatedReaction(
    () => positions.value[id],
    (currentPosition, previousPosition) => {
      if (currentPosition !== previousPosition) {
        if (!moving) {
          top.value = withSpring(currentPosition * SONG_HEIGHT);
        }
      }
    },
    [moving]
  );
}
import RenderItem from "./RenderItem";
const List = ({ dummyData, DeleteData, editidHandler }) => {
  return (
    <View style={{maxHeight:"70%"}}>
      <ScrollView
        style={{
          borderBottomWidth: 2,
          borderStyle: "dashed",
          borderColor: "#717171",
          marginVertical: 10,
          maxHeight: "100%",
        }}
      >
        {dummyData.map((item) => (
          <RenderItem
            item={item}
            key={item.id}
            id={item.id}
            editidHandler={editidHandler}
            deleteHandler={DeleteData}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
