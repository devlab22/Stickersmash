import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export type ItemData = {
    id: string;
    title?: string;
    name?: string;
    description?: string;
    mac?: string;
};

type ItemProps = {
    item: ItemData;
    style?: object;
    textColor: string;
    backgroundColor: string;
    onPress?: () => void;
};

const ItemCard = ({style, item, textColor, backgroundColor, onPress }: ItemProps) => {

    const renderRow = (key:string = 'key', value:string = 'value') => {

        return(
            <View
             style={{
                flexDirection: 'row',
                gap: 10
             }}
            >
                <Text style={[ styles.text, { color: textColor } ]}>{`${key}:`}</Text>
                <Text style={[ styles.value, { color: textColor }]}>{value}</Text>
            </View>
        )
    }
    const renderContext = (item: ItemData) => {

        return (
            <View
                style={[
                    styles.card,
                    {
                        backgroundColor: `${backgroundColor}`
                    }]}
            >
                {/* {renderRow('id', item.id)} */}
                
                {item.mac && renderRow('mac', item.mac)}
                {item.title && renderRow('title', item.title)}
                {item.name && renderRow('name', item.name)}
                {item.description && renderRow('description', item.description)}
               
            </View>
        )

    }

    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.card,
                {
                    backgroundColor: `${backgroundColor}`
                },
                style
            ]}
        >
            {renderContext(item)}

        </Pressable>

    )

}

export default ItemCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 0,
        marginVertical: 5,
        padding: 5,
       // boxShadow: '4px 4px 4px 4px rgba(120,120,120,1)'
    },
    text:{
        fontSize: 18,
       // opacity: 0.7
    },
    value:{
        fontSize: 18,
        fontWeight: 'bold'
    }
})