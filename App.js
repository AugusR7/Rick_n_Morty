import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, SafeAreaView, TouchableHighlight, Modal} from 'react-native';
import HeaderBar from './components/headerBar'


export default function App() {
  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState(true);
  const [nextAddress, setNextAddress] = useState('https://rickandmortyapi.com/api/character/?page=1');
  const [filterAddress, setFilterAddress] = useState();
  const [filteredCharacters, setFilteredCharacters] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [characterModal, setCharacterModal] = useState({});
  
  const getCharactersFromAPI = () => {
    fetch(nextAddress)
      .then(response => response.json())
      .then(response => {
        setCharacters(response.results);
        setNextAddress(response.info.next);
        setLoading(false);
      });
  };
  const getNewCharactersFromAPI = () => {
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

  function CharacterDetails({character, closeHandler} ) {
    return (
      <>
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalTopBarContainer}>
            <View style={styles.topLeftIcon}/>
            <View style={styles.detailedNameContainer}>
              <Text style={styles.detailedName}>{character.name}</Text>
            </View>
            <View style={styles.closeButtonContainer}>
                <TouchableHighlight onPress={() => closeHandler()} style={styles.touchableIcon}>
                    <Image style={styles.closeButton} source={require('./close_button_icon.png')}/>
                </TouchableHighlight>
            </View>
          </View>
          
          <View style={styles.modalImageContainer}>
            <Image style={styles.modalImage} source={{uri: character.image}} />
          </View>

          <View style={styles.characterDetailsContainer}>
            <Text style={styles.characterDetail}>{'\u2022 Gender: '+character.gender} </Text>
            { character.gender === 'Male' ? ( <Image style={styles.genderIcon} source={require('./male_icon.png')}/> ):(<></>)}
            { character.gender === 'Female' ? ( <Image style={styles.genderIcon} source={require('./female_icon.png')}/> ):(<></>)}
            { character.gender === 'unknown' ? ( <Image style={styles.genderIcon} source={require('./unknown_icon.png')}/> ):(<></>)}
            <Text style={styles.characterDetail}>{'\u2022 Status: '+character.status} </Text>
            <Text style={styles.characterDetail}>{'\u2022 Species: '+character.species} </Text>
            {/* <Text style={styles.characterDetail}>{'\u2022 Gender: '+character.gender} </Text> */}
            <Text style={styles.characterDetail}>{'\u2022 Origin: '+character.origin.name} </Text>
          </View>


        </SafeAreaView>
      </>
    );
  };

  const pressHandler = (character) =>{
    setShowModal(true);
    setCharacterModal(character)
  };

  const closeHandler = () => {
    setShowModal(false);
    setCharacterModal({});
  };
  const characterRender = ({item}) => (
    <>
      <TouchableHighlight onPress={() => { pressHandler(item) }} style={styles.touchableIcon}>
        <View style={styles.elementWrap}>
          
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: item.image}} />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>{item.name}</Text>
          </View>

        </View>
      </TouchableHighlight>
    </>
  );

  return (
    <SafeAreaView style={styles.SAVcontainer}>
      
      <HeaderBar/>
      {/* { condicion ? (<HeaderBar/>) : (<HeaderBar/>)} */}
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
      <Modal transparent={true} visible={showModal} animationType="slide">
        <CharacterDetails 
          character={characterModal} 
          closeHandler={closeHandler}/>
      </Modal>
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
    borderRadius: 10,
    backgroundColor: 'lightyellow',
    width: '50%',
    height: 40,
  },

  text: {
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
    height: '95%',
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

  modalContainer: {
    marginTop: '10%',
    borderRadius: 15,
    backgroundColor: '#555555',
    width: '95%',
    height: '90%', 
    // justifyContent: 'center',
    alignSelf: 'center',
    opacity: 0.95,
    blurRadius: 90,
  },

  modalTopBarContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  topLeftIcon: {
    flex: 1,
  },
  closeButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  closeButton: {
    width:40,
    height: 40,
  },

  detailedNameContainer: {
    flex: 6,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 10,
    backgroundColor: 'lightyellow',
    width: '20%',
    height: 60,
  },

  detailedName: {
    // backgroundColor: 'red',
    fontSize: 23,
    fontWeight: 'bold',
    margin: 10,
    // width: '90%',
    // height: '85%',
    textAlign: 'center',
  },

  modalImageContainer: {
    marginTop: 20,
  },
  
  modalImage: {
    height: '60%',
    width: '70%',
    alignSelf: 'center',
    borderRadius: 20,
  },

  characterDetailsContainer:{
    // alignSelf: 'center',
    marginLeft: '5%',
    marginRight: '5%',
    // marginBottom: '100%',
    // justifyContent: 'flex-start',
    backgroundColor:'white'
  },

  characterDetail: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  gender: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },

  genderIcon:{
    // flex: 1,
    width:40,
    height: 40,
  },
});