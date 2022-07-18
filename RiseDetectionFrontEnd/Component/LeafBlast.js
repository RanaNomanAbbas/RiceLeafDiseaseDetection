import { View, Text , FontVariant, Image} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
 const Leafblast = ({ navigation }) => {

  return (
    
    <View>
        {/* <Image style={{ width: 135, height: 135 }} source={require("../assets/image.jpeg")}/> */}
        <ScrollView>
          <Text FontVariant='Title' style={{fontWeight:'bold'}}>
Reasons:
          </Text>
        <Text style={{textAlign:'justify'}}>
        Rice blast caused by fungus Magnaporthe oryzae, is generally considered the most important disease of rice worldwide because of its extensive distribution and destructiveness under favourable conditions.
           
            </Text>
            <Text FontVariant='Title' style={{marginTop:1, alignSelf:"flex-end" , fontWeight:'bold'}}>وجوہات:
          </Text>
          <Text style={{alignSelf:"flex-end" }}>
          فنگس Magnaporthe oryzae کی وجہ سے چاول کے دھماکے کو عام طور پر دنیا بھر میں چاول کی سب سے اہم بیماری سمجھا جاتا ہے کیونکہ اس کی وسیع تقسیم اور سازگار حالات میں تباہی ہوتی ہے۔
          </Text>
        </ScrollView>
        
       </View>
      
  )
}

export default Leafblast