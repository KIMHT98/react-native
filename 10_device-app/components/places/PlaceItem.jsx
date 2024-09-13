import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function PlaceItem({ place, onSelect }) {
  return (
    <Pressable onPress={onSelect}>
      <View>
        <Image source={{ uri: place.imageUri }} />
        <View>
          <Text>{place.title}</Text>
          <Text>{place.address}</Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({

})