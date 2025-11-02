import { View, Text,StyleSheet,ScrollView } from "react-native";

export default function App() {
  return (
    <View
      style={styles.vw}
    >
      <View style = {styles.vsw}
      >      <Text style = {styles.Text}>Helllooo</Text>
</View>
      <Text style = {styles.Text}>Helllooo</Text>
    </View>
  );
 
}
 const styles = StyleSheet.create({
    vw : {
      flex :1,
      backgroundColor :'#111222'
    },
    vsw : {
      backgroundColor :'#841e11ff',
      height:'40%',
      width:'40%',
    }
    ,Text:{
      color:'#ffff'
    }
  })
