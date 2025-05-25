import { Text, View, StyleSheet } from 'react-native';
import Card from '@/components/Card';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>About screen</Text> */}

      <Card
        style={styles.card}
        onPress={() => alert('press')}
      >

        <View style={styles.row}>
          <Text style={styles.text}>description:</Text>
          <Text style={styles.text}>The FunctionComponent generic interface may also be used to appropriately type the children prop.</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.text}>test</Text>
        <Text style={styles.text}>test</Text>
        </View>

        <Text style={styles.row}>The FunctionComponent generic interface may also be used to appropriately type the children prop.</Text>
        <Text style={styles.row}>test</Text>
        <Text style={styles.row}>test</Text>
        <Text style={styles.row}>test</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  row:{
    width: '100%',
    flexDirection: 'column',
    gap: 10,
    paddingLeft: 5,
    paddingRight: 5,
    color: '#fff',
    paddingVertical: 5
  }
});
