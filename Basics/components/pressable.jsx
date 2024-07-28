import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Modal,
  Button,
  Alert,
} from "react-native";
export default function pressable() {
  const [show, setShow] = useState(false);
  return (
    <View style={{ marginBottom: 20 }}>
      <Pressable onPress={() => setShow(true)} style={style.pressable}>
        {/* onLongPress={()=>alert('long press')} onPressOut={()=>alert('On Press Out')} */}
        <Text style={style.text}>Show Model</Text>
      </Pressable>
      <Pressable
        style={style.pressable}
        onPress={() =>
          Alert.alert("Alert Tittle", "Alert Message", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
            },
            {
              text: "Ok",
              onPress: () => console.log("Ok Pressed"),
            },
          ])
        }
      >
        <Text style={style.text}>Alert</Text>
      </Pressable>
      <Modal
        visible={show}
        onRequestClose={() => setShow(false)}
        animationType="slide" //slide,fade,none
        presentationStyle="pageSheet" // this prop only for ios
      >
        <View style={style.modal}>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => setShow(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
const style = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "500",
    backgroundColor: "purple",
    width: 200,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    textAlign: "center",
    color: "white",
  },
  pressable: {
    flex: 1,
    alignItems: "center",
    marginVertical: 2,
  },
  modal: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 52,
    marginHorizontal: 20,
  },
});
