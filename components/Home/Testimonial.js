import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "../../styles/global";

const Testimonial = () => {
  return (
    <ScrollView horizontal={true} style={styles.testimonialContainer}>
      <View >
        <Text style={{ textAlign: "center", color: "#ffff", fontSize: 20 }}>
          Client 1
        </Text>
        <Text style={{ textAlign: "center", color: "#ffff" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vero
          enim tenetur odio soluta repellat atque necessitatibus perferendis
          consectetur consequuntur beatae ducimus aut saepe repellendus eos
          exercitationem ullam, est officiis?
        </Text>
      </View>
      <View >
        <Text style={{ textAlign: "center", color: "#ffff", fontSize: 20 }}>
          Client 1
        </Text>
        <Text style={{ textAlign: "center", color: "#ffff" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vero
          enim tenetur odio soluta repellat atque necessitatibus perferendis
          consectetur consequuntur beatae ducimus aut saepe repellendus eos
          exercitationem ullam, est officiis?
        </Text>
      </View>
      <View >
        <Text style={{ textAlign: "center", color: "#ffff", fontSize: 20 }}>
          Client 1
        </Text>
        <Text style={{ textAlign: "center", color: "#ffff" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vero
          enim tenetur odio soluta repellat atque necessitatibus perferendis
          consectetur consequuntur beatae ducimus aut saepe repellendus eos
          exercitationem ullam, est officiis?
        </Text>
      </View>
    </ScrollView>
  );
};

export default Testimonial;
