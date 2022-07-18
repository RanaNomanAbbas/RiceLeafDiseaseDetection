import {StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
 const DiseasesDetail = ({ navigation }) => {

  return (
    
    <View>
        <ScrollView>
          
          <Text  style={{alignItems:"center", alignSelf:"center", fontSize:19, fontWeight:'bold'}}>
          What is Rice Bacterial Leaf Blight?
          </Text>
          <Image style={{ width: '100%', height: 335 }} source={require("../assets/Bacterial-leaf-blight-of-rice.jpg")} />
          <Text> </Text>        
        <Text style={{textAlign:'justify'}}>
        Bacterial Leaf Blight in rice is a destructive bacterial disease that was first observed in 1884-1885 in Japan. It is caused by the bacterium Xanthomonas oryzae pv. oryzae. It is present in rice cropping regions of Asia, Africa, Australia, Latin America and the Caribbean and very rarely in the United States (Texas).
            </Text>
            <Text>
            چاول میں بیکٹیریل لیف بلائٹ ایک تباہ کن بیکٹیریل بیماری ہے جو پہلی بار جاپان میں 1884-1885 میں دیکھی گئی تھی۔ یہ بیکٹیریم Xanthomonas oryzae pv کی وجہ سے ہوتا ہے۔ oryzae یہ ایشیا، افریقہ، آسٹریلیا، لاطینی امریکہ اور کیریبین کے چاول کی فصل کے علاقوں میں موجود ہے اور ریاستہائے متحدہ (ٹیکساس) میں بہت کم پایا جاتا ہے۔
            </Text>
        </ScrollView>
        
       </View>
      
  )
}

export default DiseasesDetail;
const style=StyleSheet.create({
  img:{
    alignSelf:'center',
  width: '80%',
  // height:'100%',
  // position: 'relative',
  top: 1,
  bottom: 1,
  left: 0,
  right: 0,
}
 
})