import React, {useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image } from 'react-native';

export default function App() {
  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState(true);

  const obtenerPersonajes = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/1,2');
    const json = await response.json();
    setCharacters(json)
  }

  obtenerPersonajes();
  // console.log(characters);

  // fetch('https://rickandmortyapi.com/api/character/1,2')
  //     .then(response => response.json())
  //     .then(response => {
  //       var results = response.results
  //       setCharacters(results);
  //       console.log(results);
  //       // setCharacters(response.results);
  //       // setCharacters(response);
  //       console.log(response);
  //       // console.log("--------------------------");
  //       // console.log(response.name);
  //     });
  

  return (
    <View style={styles.container}>
      <Text>Prueba piloto!</Text>
      {/* <FlatList>
          {characters.map((item, index) => (
            <Text key={index}>
              {item.name}
            </Text>
          ))}
        </FlatList> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});