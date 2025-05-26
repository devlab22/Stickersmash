import { StyleSheet, View, Pressable } from 'react-native'
import React, { ReactNode } from 'react'

type Props = {
    style?: object
    children?: ReactNode
    onPress?: () => void
}
const Card = ({ style, children, onPress}: Props) => {
    return (
        <Pressable
            style={[styles.card, style]}
            onPress={onPress}
            >
           
                {children}
           
        </Pressable>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        width: '90%',
       // padding: 20,
      //  paddingVertical: 10,
      //  paddingHorizontal: 16,
        borderRadius: 8,
        boxShadow: '4px 4px 4px 4px rgba(120,120,120,1)'
    }
})