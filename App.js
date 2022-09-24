import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, SafeAreaView } from 'react-native';
import HeaderBar from './components/headerBar'


export default function App() {
  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState(true);
  const [nextAddress, setNextAddress] = useState('https://rickandmortyapi.com/api/character/?page=1');
  const [filterAddress, setFilterAddress] = useState();
  const [filteredCharacters, setFilteredCharacters] = useState();
  
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
      <View style={styles.elementWrap}>
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
    <SafeAreaView style={styles.SAVcontainer}>
      
      <HeaderBar/>

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
  SAVcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  elementWrap:{
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: 'black',
    height: 200,
    width: '100%',
  },

  listElement: {
    backgroundColor: '#555555',
    width: '100%',
  },

  textContainer: {
    alignSelf: 'center',
    // marginTop: 30,
    borderRadius: 10,
    backgroundColor: 'lightyellow',
    width: '50%',
    height: 40,
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
    height: 1,
    backgroundColor: 'grey',
  },

  imageContainer: {
    height: '90%',
    width: '40%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '90%',
    borderRadius: 100,
  },
  
});