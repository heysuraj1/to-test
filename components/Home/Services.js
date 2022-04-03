import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import styles from "../../styles/global";

const Services = () => {
  return (
    <>
      <View>
        <Text style={styles.mainText}>Kitchen Chimney Service</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.mainServiceContainer}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/serv-1.png")}
          />
        </View>
        <View style={styles.mainServiceContainer}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/serv-1.png")}
          />
        </View>
        <View style={styles.mainServiceContainer}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/serv-1.png")}
          />
        </View>
        <View style={styles.mainServiceContainer}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/serv-1.png")}
          />
        </View>
        <View style={styles.mainServiceContainer}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/serv-1.png")}
          />
        </View>

      </ScrollView>


      {/* this is an another service compo  */}

      <View>
        <Text style={styles.mainText}>Chimney Installation Service</Text>
      </View>


      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.mainServiceContainer}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/serv-1.png")}
          />
        </View>
        <View style={styles.mainServiceContainer}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/serv-1.png")}
          />
        </View>
        <View style={styles.mainServiceContainer}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/serv-1.png")}
          />
        </View>
        <View style={styles.mainServiceContainer}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/serv-1.png")}
          />
        </View>
        <View style={styles.mainServiceContainer}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/serv-1.png")}
          />
        </View>

      </ScrollView>
      <View>
        <Text style={styles.mainText}>Chimney Uninstallation Service</Text>
      </View>


      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.mainServiceContainer}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/serv-1.png")}
          />
        </View>
        <View style={styles.mainServiceContainer}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/serv-1.png")}
          />
        </View>
        <View style={styles.mainServiceContainer}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/serv-1.png")}
          />
        </View>
        <View style={styles.mainServiceContainer}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/serv-1.png")}
          />
        </View>
        <View style={styles.mainServiceContainer}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/serv-1.png")}
          />
        </View>

      </ScrollView>
      <View>
        <Text style={styles.mainText}>Visiting Service</Text>
      </View>


      <ScrollView   showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.mainServiceContainer}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/serv-1.png")}
          />
        </View>
        <View style={styles.mainServiceContainer}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/serv-1.png")}
          />
        </View>
        <View style={styles.mainServiceContainer}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/serv-1.png")}
          />
        </View>
        <View style={styles.mainServiceContainer}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/serv-1.png")}
          />
        </View>
        <View style={styles.mainServiceContainer}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../../assets/serv-1.png")}
          />
        </View>

      </ScrollView>




      







    </>
  );
};

export default Services;
