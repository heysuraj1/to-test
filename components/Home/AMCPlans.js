import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import React from "react";
import styles from "../../styles/global";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../gql/queries";

const AMCPlans = () => {
  const { data, error, loading } = useQuery(GET_ALL_PRODUCTS);

  const handlePress = (id) => {
    Alert.alert(`Add + button clicked for ${id}`);
  };

  if (loading)
    return (
      <Text style={{ textAlign: "center" }}>Loading AMC Please Wait...</Text>
    );

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={{ marginBottom: 100, marginTop: 20 }}
    >
      {data ? (
        data.amcs.data.map((hit) => {
          return (
            <View style={styles.amcContainer} key={hit.id} >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {hit.attributes.AMCName}
              </Text>
              <Text style={{ color: "white", textAlign: "center" }}>
                Price : ₹ {hit.attributes.Price}
              </Text>
              <Text style={{ color: "white", textAlign: "center" }}>
                For {hit.attributes.AMCPeriod}
              </Text>

              <TouchableOpacity
                onPress={() => handlePress(hit.id)}
                style={{
                  backgroundColor: "white",
                  borderRadius: 5,
                  marginTop: 13,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#3073AE",
                  }}
                >
                  Add +
                </Text>
              </TouchableOpacity>
            </View>
          );
        })
      ) : (
        <Text style={{ textAlign: "center" }}>Loading Please Wait...</Text>
      )}
    </ScrollView>
  );
};

export default AMCPlans;
