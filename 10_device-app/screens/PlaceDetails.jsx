import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import React, {
  useEffect,
  useState,
} from "react";
import OutlineButton from "../components/ui/OutlineButton";
import { Colors } from "../constants/colors";
import { fetchPlaceDetails } from "../util/database";

export default function PlaceDetails({
  route,
  navigation,
}) {
  const [fetchedPlace, seFetchedPlace] =
    useState();
  function showOnMapHandler() {
    navigation.navigate("Map", {
      initialLat: fetchedPlace.location.lat,
      initialLng: fetchedPlace.location.lng,
    });
  }
  const slectedPlaceId = route.params.placeId;
  useEffect(() => {
    async function loadPlaceData() {
      const place = await fetchPlaceDetails(
        slectedPlaceId
      );
      seFetchedPlace(place);
      navigation.setOptions({
        title: place.title,
      });
    }
    loadPlaceData();
  }, [slectedPlaceId]);
  if (!fetchedPlace) {
    return (
      <View>
        <Text>Loading Place Details...</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{
          uri: fetchedPlace.imageUri,
        }}
      />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>
            {fetchedPlace.address}
          </Text>
        </View>
        <OutlineButton
          icon="map"
          onPress={showOnMapHandler}
        >
          View on Map
        </OutlineButton>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
