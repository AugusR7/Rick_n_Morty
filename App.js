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
          <View style={styles.modalImageContainer}>
            <Image style={styles.modalImage} source={{uri: character.image}} />
          </View>

          <Text style={styles.detailedName}>{character.name}</Text>

          <View style={styles.modalSeparator}/>

          <View style={styles.characterDetailContainer}>
            <Text style={styles.characterDetailHeader}>{'Status: '} </Text>
            { character.status === 'Alive' ? ( <Image style={styles.characterDetailIcon} source={require('./green_heart.png')}/> ):(<></>)}
            { character.status === 'Dead' ? ( <Image style={styles.characterDetailIcon} source={require('./rip.png')}/> ):(<></>)}
            { character.status === 'unknown' ? ( <Image style={styles.characterDetailIcon} source={require('./unknown_icon.png')}/> ):(<></>)}
            { character.status === 'Alive' ? (<Text style={styles.aliveStatus}> {character.status}</Text>) : (<></>)}
            { character.status === 'Dead' ? (<Text style={styles.deadStatus}> {character.status}</Text>) : (<></>)}
            { character.status === 'unknown' ? (<Text style={styles.characterInformationText}> {character.status}</Text>) : (<></>)}
          </View>
          
          <View style={styles.characterDetailContainer}>
            <Text style={styles.characterDetailHeader}>{'Gender: '} </Text>
            <View style={styles.characteDetailContent}>
              { character.gender === 'Male' ? ( <Image style={styles.characterDetailIcon} source={require('./male_icon.png')}/> ):(<></>)}
              { character.gender === 'Female' ? ( <Image style={styles.characterDetailIcon} source={require('./female_icon.png')}/> ):(<></>)}
              { character.gender === 'unknown' ? ( <Image style={styles.characterDetailIcon} source={require('./unknown_icon.png')}/> ):(<></>)}
              <Text style={styles.characterInformationText}> {character.gender}</Text>
            </View>
          </View>

          <View style={styles.characterDetailContainer}>
            <Text style={styles.characterDetailHeader}>{'Species: '} </Text>
            <View style={styles.characteDetailContent}>
              <View>
                <Text style={styles.characterInformationText}> {character.species}</Text>
                { character.type !== '' ? ( <Text style={styles.characterInformationText}> ({character.type})</Text>):(<></>)}
              </View>
            </View>
          </View>

          <View style={styles.characterDetailContainerTruncated}>
            <Text style={styles.characterDetailHeader}>{'Origin: '} </Text>
            <View style={styles.characteDetailContent}>
              <Text style={styles.characterInformationText}> {character.origin.name}</Text>
            </View>
          </View>
          
          <View style={styles.characterDetailContainerTruncated}>
            <Text style={styles.characterDetailHeader}>{'Actual Location: '} </Text>
            {/* <View style={styles.characteDetailContent}> */}
              <View>
              <Text style={styles.characterInformationText}> {character.location.name}</Text>
            </View>
          </View>
            
            {/* <Text style={styles.characterDetail}>{'\u2022 Status: '+character.status} </Text>
            <Text style={styles.characterDetail}>{'\u2022 Species: '+character.species} </Text>
            <Text style={styles.characterDetail}>{'\u2022 Gender: '+character.gender} </Text>
          <Text style={styles.characterDetail}>{'\u2022 Origin: '+character.origin.name} </Text> */}
          {/* </View> */}


          <View style={styles.closeButtonContainer}>
              <TouchableHighlight onPress={() => closeHandler()} style={styles.touchableIcon}>
                  <Image style={styles.closeButton} source={require('./close_button_icon.png')}/>
              </TouchableHighlight>
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
    textAlign: 'center',
  },

  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
  },

  modalSeparator: {
    alignSelf: 'center',
    width: '95%',
    height: 1.5,
    backgroundColor: 'grey',
    marginBottom: '2%',
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
    marginTop: '30%',
    borderRadius: 15,
    backgroundColor: '#555555',
    width: '80%',
    height: '78%', 
    alignSelf: 'center',
    // opacity: 0.99,
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
    justifyContent: 'flex-end',
    marginBottom: '5%'
  },

  closeButton: {
    width:40,
    height: 40,
  },

  detailedName: {
    fontSize: 36,
    fontWeight: 'bold',
    margin: 10,
    color: 'white',
    marginTop: 10,
  },
  
  modalImage: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    resizeMode: 'contain',
    aspectRatio: 1,
    height: undefined,
    width: undefined,
  },
  
  characterDetailContainer:{
    flexDirection: 'row',
    marginLeft: '5%',
    marginBottom: '3%',
  },

  characterDetailHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'darkgrey',
  },

  characterDetailContainerTruncated: {
    marginLeft: '5%',
    marginBottom: '3%',
  },

  characteDetailContent: {
    flexDirection: 'row',
  },

  characterInformationText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
  },

  characterDetailIcon:{
    resizeMode: 'contain',
    aspectRatio: 0.7,
    height: undefined,
    width: undefined,
  },

  aliveStatus: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'lightgreen',
    alignSelf: 'center'
  },

  deadStatus: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'red',
    alignSelf: 'center'
  },

});