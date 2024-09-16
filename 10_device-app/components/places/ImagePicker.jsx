import {
  View,
  Text,
  Button,
  Alert,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { Colors } from "../../constants/colors";
import OutlineButton from "../ui/OutlineButton";
export default function ImagePicker({
  onImageTaken,
}) {
  const [pickedImage, setPickedImage] =
    useState();
  const [
    cameraPermissionInformation,
    requestPermission,
  ] = useCameraPermissions();
  async function verifyPermissions() {
    if (
      cameraPermissionInformation.status ===
      PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse =
        await requestPermission();
      return permissionResponse.granted;
    }
    if (
      cameraPermissionInformation.status ===
      PermissionStatus.DENIED
    ) {
      Alert.alert(
        "Insufficient Persmissions",
        "사용하려면 허용을 해라."
      );
      return false;
    }
    return true;
  }
  async function takeImageHandler() {
    const hasPermission =
      await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedImage(image.assets[0].uri);
    onImageTaken(image.assets[0].uri);
  }
  let imagePreview = (
    <Text>No image taken yet</Text>
  );

  if (pickedImage) {
    imagePreview = (
      <Image
        style={styles.image}
        source={{ uri: pickedImage }}
      />
    );
  }
  return (
    <View>
      <View style={styles.imagePreview}>
        {imagePreview}
      </View>
      <OutlineButton
        onPress={takeImageHandler}
        icon="camera"
      >
        사진 찍기
      </OutlineButton>
    </View>
  );
}
const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
});
