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
      
      
      <View style = {styles.header}>
        <Image style={styles.logo} source={require('./Rick_and_Morty_logo.png')} />
      </View>


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

  header: {
    alignSelf: 'top',
    backgroundColor: 'black',
    width: '100%',
    height: 80,
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    height: '61%',
    width: '40%'
  },


  elementWrap:{
    alignSelf: 'center',
    backgroundColor: 'black',
    height: 230,
    width: '100%',
  },

  listElement: {
    backgroundColor: '#555555',
    width: '100%',
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
    width: '90%',
    alignSelf: 'left',
    alignItems: 'left',
    justifyContent: 'center',
    marginLeft: 30,
  },
  image: {
    width: '40%',
    height: '80%',
    borderRadius: 100,
  },


  textContainer: {
    borderRadius: 10,
    backgroundColor: 'lightyellow',
    width: '70%',
    height: 40,
  },


});