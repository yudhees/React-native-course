import { View, Text, StyleSheet, Platform, Image } from "react-native";
const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};

export default function pokemoncard({ data }) {
  const { borderColor: typeBorderColor, emoji: typeEmoji } = getTypeDetails(
    data.type
  );
  return (
    <View style={styles.card}>
      <View style={styles.namecontainer}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.hp}>❤️{data.hp}</Text>
      </View>
      <View style={{ width:'100%',alignItems:'center',alignSelf:'center',flex:1 }}> 
      <Image
        source={data.image}
        accessibilityLabel={`${data.name}` + "Pokemon"}
        style={styles.image}
      />
      </View>
      <View style={styles.typeContainer}>
        <View style={[styles.badge,{borderColor:typeBorderColor}]}>
          <Text style={styles.typeEmoji}>{typeEmoji}</Text>
          <Text style={styles.typeText}>{data.type}</Text>
        </View>
      </View>
      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>{data.moves.join(",")}</Text>
      </View>
      <View style={styles.weaknessContainer}>
        <Text style={styles.movesText}>{data.weaknesses.join(",")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  namecontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    resizeMode: 'contain',
    marginLeft:2
  },
  typeContainer:{
    alignItems:"center",
    marginBottom:20,
  },
  badge:{
     flexDirection:"row",
     paddingVertical:6,
     paddingHorizontal:12,
     borderWidth:4,
     alignItems:'center',
     borderRadius:20,
  },
  typeEmoji:{
    fontSize:32,
    marginRight:12,
  },
  typeText:{
    fontSize:22,
    fontWeight:'bold',
  },
  movesContainer:{
    marginBottom:16,
  },
  weaknessContainer:{
    marginBottom:8,
  },
  movesText:{
    fontSize:22,
    fontWeight:'bold',
  }
});
