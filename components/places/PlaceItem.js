import { View, Image, Text, Pressable, StyleSheet } from "react-native"

function PlaceItem({ place, onSelect }) {
    return (
        <Pressable onPress={onSelect}>
            <View>
                <Image source={{ uri: place.imageUri }} />
                <View>
                    <Text>TITLE</Text>
                    <Text>ADDRESS</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default PlaceItem

const styles = StyleSheet.create({

})