import React, {useEffect, useState} from 'react';
import { Text, View, ActivityIndicator, FlatList, Image, SafeAreaView, TouchableHighlight, Modal} from 'react-native';
import HeaderBar from './components/HeaderBar/headerBar';
import CharacterDetails from './components/Modals/CharacterDetails/ModalCharacters';
import ModalFilter from './components/Modals/Filter/ModalFilter'
import styles from './components/appStyles';

export default function App() {
  // ---------------------------------- State declarations ---------------------------------- //
  const [characters,  setCharacters] =       useState();
  const [loading,       setLoading] =        useState(true);
  const [nextAddress,   setNextAddress] =    useState('https://rickandmortyapi.com/api/character');
  const [showModal,     setShowModal] =      useState(false);
  const [characterModal,setCharacterModal] = useState({});
  const [showFilter,    setShowfilter] =     useState(false);
  
  // ----------------------- filtros ----------------------- //
  var nameFilter = '';
  var speciesFilter = '';
  var typeFilter = '';
  var genderFilter = '';
  var statusFilter = '';

  // ---------------------------------- Callbacks (handlers) ---------------------------------- //

  const generateSearchAddress = (filterAttributes) => {
    var address = 'https://rickandmortyapi.com/api/character?'
    + 'name='    +  filterAttributes[0]
    + '&species='+  filterAttributes[1]
    + '&type='   +  filterAttributes[2]
    + '&status=' +  filterAttributes[3]
    + '&gender=' +  filterAttributes[4]
    console.log("[Address] Generé: "+address);
    setNextAddress(address);
    getCharactersFromAPI(address);
  }

  // ---------------------------------- Fetch functions ---------------------------------- //
  const getCharactersFromAPI = (filteredAddress) => {
    console.log("[Fetch] Me llamaron con: "+filteredAddress+"\n");
    fetch(filteredAddress)
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

  // ------------------------------------------------------------------------------------- //
  useEffect( ()=> {
    getCharactersFromAPI(nextAddress);
  }, []);

  // ---------------------------------- Press handlers ---------------------------------- //
  const pressHandler = (character) =>{
    setShowModal(true);
    setCharacterModal(character)
  };

  const acceptHandler = (filterAttributes) => {
    setShowModal(false);
    setShowfilter(false);
    setCharacterModal({});
    generateSearchAddress(filterAttributes);
  };

  const closeHandler = () => {
    setShowModal(false);
    setShowfilter(false);
    setCharacterModal({});
  };
  const filterEnabler = () => {
    setShowfilter(true);
  };

  // ---------------------------------- Character Render ---------------------------------- //
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
  // ---------------------------------- Screen Render ---------------------------------- //
  return (
    <SafeAreaView style={styles.SAVcontainer}>
      
      <HeaderBar 
        filterEnabler={filterEnabler}
        closeHandler = {closeHandler}
      />
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
          closeHandler={closeHandler}
          />
      </Modal>

      <Modal transparent={true} visible={showFilter} animationType="slide">
        <ModalFilter
          acceptHandler =   {acceptHandler}
          closeHandler  =   {closeHandler}
          />
      </Modal>
    </SafeAreaView>
  );
}
