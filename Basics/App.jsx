import {
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import TextView from "./components/TextView.jsx";
import Image from "./components/Image.jsx";
import Pressable from "./components/pressable.jsx";
import { lazy, Suspense } from "react";
const StylesApi = lazy(() => import("./components/StylesApi.jsx"));
export default function App() {
  return (
    <>
      <StatusBar style="auto" hidden={false} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "plum" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.heading}>View and Text Component</Text>
          <TextView />
          <Text style={styles.heading}>Image Component</Text>
          <Image />
          <Text style={styles.heading}>Pressable And Model Component</Text>
          <Pressable />
          <Text style={styles.heading}>StylesApi</Text>
          <Suspense>
            <StylesApi />
          </Suspense>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontWeight: "700",
    fontSize: 20,
    paddingVertical: 20,
    marginStart: 4,
  },
});
