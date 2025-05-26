import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import Card from '@/components/Card';
import Item from '@/components/Item'
import React, { useState, useEffect } from 'react';
import { createUUID, genMac } from '@/utility/tools';
import ItemCard, { ItemData } from '@/components/ItemCard';


/* type ItemData = {
  id: string;
  title: string;
  description: string;
}; */

const DATA: ItemData[] = [
  {
    id: createUUID(),
    title: '1. Item',
    mac: genMac(),
    description: ""
  },
  {
    id: createUUID(),
    title: '2. Item',
    description: ""
  },
  {
    id: createUUID(),
    title: '3. Item',
    description: ""
  },
];

export default function AboutScreen() {

  const [items, setItems] = useState<ItemData[]>()
  const [selectedIdList, setSelectedIdList] = useState<string>()
  const [selectedId, setSelectedId] = useState<string>();

  useEffect(() => {

    const tmp: ItemData[] = []
    for (let i = 1; i <= 100; i++) {

      let item: ItemData = {
        id: createUUID(),
        //  title: `${i}. Item`,
        name: `${i}. Item`,
        mac: genMac(),
        description: `${i}. Description of Item`
      }
      tmp.push(item)
    }

    setItems(tmp)

  }, [])

  const renderItem = ({ item }: { item: ItemData }) => {
    let backgroundColor = item.id === selectedIdList ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedIdList ? 'white' : 'black';

    return (
      <ItemCard
        item={item}
        backgroundColor={backgroundColor}
        textColor={color}
        onPress={() => setSelectedIdList(item.id)}
      />
    )

  }

  const renderCard = (item: ItemData) => {

    let backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';
    // backgroundColor = item.id === selectedId ? 'blue' : 'green';

    return (
      <Card
        key={item.id}
        onPress={() => setSelectedId(item.id)}
        style={{
          backgroundColor: `${backgroundColor}`,
          marginBottom: 20,
          width: '100%'
          // minHeight: 20
        }}
      >
        <Item
          item={item}
          textColor={color}
        />
      </Card>
    )
  }
  return (
    <View style={styles.container}>

      {/*  <ScrollView>
       {DATA.map((item) => (

        renderCard(item)
      ))}
     </ScrollView> */}


      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedIdList}
        ListHeaderComponent={
          <View
            style={{
              paddingVertical: 10,
              alignItems: 'center',
              justifyContent: 'center',
             // backgroundColor: '#fff',
              backgroundColor: '#f9c2ff',
              borderRadius: 0
            }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: 'bold'
              }}
            >Demo List</Text>
          </View>
        }

      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#25292e',
    //justifyContent: 'center',
    alignItems: 'center',


  },
  text: {
    color: '#fff',
  },
  card: {
    width: '90%',
    gap: 10
  },
  row: {
    width: '100%',
    flexDirection: 'column',
    gap: 10,
    paddingLeft: 5,
    paddingRight: 5,
    color: '#fff',
    paddingVertical: 5
  }
});
