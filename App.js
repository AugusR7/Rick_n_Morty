import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, SafeAreaView } from 'react-native';



export default function App() {
  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState(true);
  const [nextAddress, setNextAddress] = useState('https://rickandmortyapi.com/api/character/?page=1');
  
  const getCharactersFromAPI = ()=>{
    fetch(nextAddress)
      .then(response => response.json())
      .then(response => {
        setCharacters(response.results);
        setNextAddress(response.info.next);
        setLoading(false);
      });
  };
  const getNewCharactersFromAPI = ()=> {
    fetch(nextAddress)
      .then(response => response.json())
      .then(response => {
        setCharacters( ()=>{
          let prevCharacters = characters
          let newCharacters = response.results;
          let result = [...prevCharacters, ...newCharacters];
          return result;
        });
        setNextAddress(response.info.next);
        setLoading(false);
      });
  };

  useEffect( ()=> {
    getCharactersFromAPI();
  }, []);
  
  const characterRender = ({item}) => (
    <>
      <View style={styles.contentWrap}> 
      
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: item.image}} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.texto}>{item.name}</Text>
        </View>
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" animating={loading} />
      ) : (
        <FlatList
          style = {styles.listElement}
          keyExtractor = {item => item.id}
          data = {characters}
          onEndReached = {getNewCharactersFromAPI}
          renderItem = {characterRender}
          ItemSeparatorComponent={ () => <View style={styles.separator} /> }
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
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    // width: '100%',
    textAlign: 'center',
  },
  separator: {
    width: '100%',
    height: 2,
    backgroundColor: 'red',
  },
  image: {
    width: 170,
    height: 185,
    // borderRadius: 15,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    borderRadius: 10,
    // alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'lightyellow',
    width: '70%',
    height: 40,
  },
  contentWrap:{
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 20,
    height: 230,
    width: 250,
  }
});