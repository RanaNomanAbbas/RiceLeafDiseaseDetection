import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
 const BrownSpotz = ({ navigation }) => {

  return (
    
    <View>
        <ScrollView>
          <Text style={{alignItems:"center", alignSelf:"center", fontSize:19, fontWeight:'bold'}}> What is Brown Spot?
          </Text>
        <Image style={style.img} source={require("../assets/download.jpg")} />
        <Text style={{textAlign:'justify'}}></Text>
        <Text style={{textAlign:'justify'}}>
        Brown spot is a fungal disease that infects the coleoptile, leaves, leaf sheath, panicle branches, glumes, and spikelets. Its most observable damage is the numerous big spots on the leaves which can kill the whole leaf. When infection occurs in the seed, unfilled grains or spotted or discolored seeds are formed.
           
            </Text>
            <Text style={{alignItems:"center", alignSelf:"center", fontSize:19, fontWeight:'bold'}}> براؤن سپاٹ کیا ہے؟
          </Text>
          <Text style={{textAlign:'justify'}}>
          براؤن سپاٹ ایک کوکیی بیماری ہے جو کولیوپٹائل، پتوں، پتوں کی میان، پینیکل شاخوں، گلومز اور سپائیکلیٹس کو متاثر کرتی ہے۔ اس کا سب سے زیادہ قابل مشاہدہ نقصان پتوں پر بہت سے بڑے دھبے ہیں جو پورے پتے کو ہلاک کر سکتے ہیں۔ جب بیج میں انفیکشن ہوتا ہے، تو بھرے ہوئے دانے یا دھبے والے یا بے رنگ بیج بن جاتے ہیں۔
            </Text>
        </ScrollView>
        
       </View>
      
  )
}

export default BrownSpotz;
const style= StyleSheet.create({
img:{
  alignSelf:'center',
  width: '50%',
  position: 'relative',
  top: 1,
  bottom: 1,
  left: 0,
  right: 0,
}
})
