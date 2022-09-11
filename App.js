import React, {useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image } from 'react-native';

export default function App() {
  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState(true);

  fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10')
    .then(response => response.json())
    .then(response => {
      setCharacters(response.results);
      console.log(response.results);
      setLoading(false)
    });
  const renderItem = ({item}) => (
    <>
      <Image style={styles.image} source={{uri: item.image}} />
      <Text style={styles.texto}>{item.name}</Text>
    </>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" animating={loading} />
      ) : (
        <FlatList
          key={item => item.id}
          data={characters}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
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
});