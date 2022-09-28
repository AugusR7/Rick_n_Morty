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
  //var filterAddress = ''
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

  const generateSearchAddress = () => {
    var address = 'https://rickandmortyapi.com/api/character?'
    +  'name='   +  nameFilter 
    + '&species='+  speciesFilter 
    + '&type='   +  typeFilter
    + '&status=' +  statusFilter
    + '&gender=' +  genderFilter;
    console.log("[A] Generé: "+address);
    setNextAddress(address);
    //getCharactersFromAPI(address);
  }

  const searchByName = (name) => {
    console.log("[N] Me llamaron con: "+name);
    nameFilter = name;
    generateSearchAddress();
  };

  const searchBySpecies = (species) => {
    console.log("[Sp] Me llamaron con: "+species);
    speciesFilter = species;
    generateSearchAddress();
  };

  const searchByType = (type) => {
    console.log("[T] Me llamaron con: "+type);
    typeFilter = type;
    generateSearchAddress();
  };

  const searchByStatus = (status) => {
    console.log("[St] Me llamaron con: "+status);
    statusFilter = status;
    generateSearchAddress();
  };
  const searchByGender = (gender) => {
    console.log("[G] Me llamaron con: "+gender);
    genderFilter = gender;
    generateSearchAddress();
  };

  // ---------------------------------- Fetch functions ---------------------------------- //
  // const getCharactersFromAPI = () => {
  //   fetch(nextAddress)
  //     .then(response => response.json())
  //     .then(response => {
  //       setCharacters(response.results);
  //       setNextAddress(response.info.next);
  //       setLoading(false);
  //     });
  // };

  const getCharactersFromAPI = (filteredAddress) => {
    console.log("[F] Me llamaron con: "+filteredAddress);
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

  const acceptHandler = () => {
    setShowModal(false);
    setShowfilter(false);
    setCharacterModal({});
    getCharactersFromAPI(nextAddress);
  };

  const closeHandler = () => {
    setShowModal(false);
    setShowfilter(false);
    setCharacterModal({});
  };
  const filterEnabler = () => {
    setShowfilter(true);
  };

  // const 
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
          searchByName =    {searchByName}
          searchBySpecies = {searchBySpecies}
          searchByType =    {searchByType}
          searchByStatus =  {searchByStatus}
          searchByGender =  {searchByGender}
          />
      </Modal>
    </SafeAreaView>
  );
}
