import { View, Text, StyleSheet } from "react-native";

export default function TextView() {
    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                <View
                    style={{
                        backgroundColor: "lightgreen",
                        ...style.vText,
                    }}
                >
                    <Text style={{ ...style.TextStyle, color: "blue" }}>Hello</Text>
                </View>
                <View
                    style={{
                        backgroundColor: "lightblue",
                        ...style.vText,
                    }}
                >
                    <Text
                        style={{
                            ...style.TextStyle,
                            color: "red",
                        }}
                    >
                        World
                    </Text>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    vText: {
        height: 200,
        width: 200,
        justifyContent: "center", // oposite to web -align
        alignItems: "center",  // opposite to web -justify
    },
    TextStyle: {
        fontSize: 30,
        fontWeight: "500",
    },
});
