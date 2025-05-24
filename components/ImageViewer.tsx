import { StyleSheet, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';

type Props = {
    imgSource: ImageSourcePropType;
    style?: object;
    selectedImage?: string;
};

const ImageViewer = ({ imgSource, style, selectedImage }: Props) => {
    const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

    return <Image source={imageSource} style={[styles.image, style]} />;
}

export default ImageViewer

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 380,
        borderRadius: 18,
    },
})