import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export type ItemData = {
    id: string;
    title?: string;
    description?: string;
    mac?: string;
};

type ItemProps = {
    item: ItemData;
    textColor: string;
};

const Item = ({ item, textColor }: ItemProps) => {
    return (
        <View
            style={
                [ styles.item]
            }
        >
             <Text
                style={
                    [{ color: textColor }]
                }
            >{item.id}</Text>
            <Text
                style={
                    [{ color: textColor, fontSize: 32 }]
                }
            >{item.title}</Text>
            <Text
                style={
                    [{ color: textColor }]
                }
            >{item.description}</Text>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    item:{
      //  width: '100%',
        padding: 10,
         marginVertical: 8,
    marginHorizontal: 16,
        alignItems: 'center',
        
        //justifyContent: 'center',
        //alignContent: 'center'
    }
})