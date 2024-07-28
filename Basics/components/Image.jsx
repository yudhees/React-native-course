import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
const Icon = require("../assets/adaptive-icon.png");
export default function ImageComp() {
  return (
    <View>
      <View style={style.container}>
        <Image source={Icon} style={style.image} />
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={style.image}
        />
      </View>
      <ImageBackground source={{ uri: "https://picsum.photos/seed/picsum/600" }} style={style.backgroundImage}>
        <Text style={style.backgroundText}>Image Background</Text>
      </ImageBackground>
    </View>
  );
}
const style = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  backgroundImage:{
    height:200,
    justifyContent:'center',
    alignItems:"center",
  },
  backgroundText:{
    fontWeight:'500',
    fontSize:20,
    color:'blue',
  }
});
