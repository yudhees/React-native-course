import { View, Text, StyleSheet } from 'react-native'

export default function StylesApi() {
  return (
    <View style={styles.container}>
          <Box style={[styles.bgLightgreen,styles.box,styles.boxShadow]} text="Light Green"/>
          <Box style={[styles.bgLightblue,styles.box,styles.androidShadow]} text="Light Blue"/>
    </View>
  )
}
const Box=({style,text})=>{
    return (
        <View style={style}>
            <Text>{text}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginVertical:10,
        paddingHorizontal:10,
    },
    box:{
        width:200,
        height:200,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'purple',
        marginVertical:4,
        borderWidth:2,
    },
    bgLightgreen:{
          backgroundColor:'lightgreen'
    },
    bgLightblue:{
        backgroundColor:'lightblue',
    },
    boxShadow:{ // this will only works for ios
        shadowColor:"#333333",
        shadowOffset:{    
            width:6,
            height:6,
        },
        shadowOpacity:'0.6',
        shadowRadius:4,
    },
    androidShadow:{// for android  Note: for support both platform better use any package
        elevation:10,
        shadowColor:"blue"
    }
})