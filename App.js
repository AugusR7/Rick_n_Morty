import React, {useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, SafeAreaView } from 'react-native';

export default function App() {
  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState(true);

  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(response => {
      setCharacters(response.results);
      setLoading(false)
    });
    const renderItem = ({item}) => (
      <>
      <View style={styles.textContainer}>
        <Text style={styles.texto}>{item.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item.image}} />
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" animating={loading} />
      ) : (
        <FlatList
          style={styles.listElement}
          key={item => item.id}
          data = {characters}
          renderItem = {renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  listElement: {
    backgroundColor: 'grey',
    width: '80%',
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    backgroundColor: 'yellow',
    // width: '100%',
    // alignSelf: 'center',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
  },
  image: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignContent: 'center',
  },
});