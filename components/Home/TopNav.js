import { Text, View ,ScrollView ,Image } from 'react-native'
import React from 'react'
import styles from "../../styles/global"

const TopNav = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true} >
     <View style={styles.topMenu}  >
         <Image style={styles.topImage}   source={require("../../assets/img-1.png")}  />
     </View>
     <View style={styles.topMenu}  >
         <Image style={styles.topImage}  source={require("../../assets/img-2.png")}  />
     </View>
     <View style={styles.topMenu}  >
         <Image style={styles.topImage}  source={require("../../assets/img-3.png")}  />
     </View>
     <View style={styles.topMenu}  >
         <Image style={styles.topImage}  source={require("../../assets/img-4.png")}  />
     </View>
   
   
    </ScrollView>
  )
}

export default TopNav

