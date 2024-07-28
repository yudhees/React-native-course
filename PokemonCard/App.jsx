import {
  StyleSheet,
  SafeAreaView,
  Platform,
  FlatList,
} from "react-native";
import Pokemoncard from "./components/pokemoncard";
import * as PokemonData from "./constants/pokemondata.js";
export default function App() {
  const pokemonArray = Object.values(PokemonData);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemonArray}
        renderItem={({ item }) => <Pokemoncard data={item} />}
        keyExtractor={(item, key) => "pokemon" + key}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS == "android" ? 40 : 0,
  },
});
