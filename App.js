import React, {useEffect, useState} from 'react';
import { Animated, Text, View, ActivityIndicator, FlatList, Image, SafeAreaView, TouchableHighlight, Modal, PixelRatio} from 'react-native';
import HeaderBar from './components/HeaderBar/headerBar';
import CharacterDetails from './components/Modals/CharacterDetails/ModalCharacters';
import ModalFilter from './components/Modals/Filter/ModalFilter'
import styles from './components/appStyles';

const AVATAR_SIZE = 150; 
const SPACING = 20;
const ITEM_SIZE = AVATAR_SIZE + SPACING*3;


export default function App() {
  // ---------------------------------- State declarations ---------------------------------- //
  const [characters,  setCharacters] =       useState();
  const [loading,       setLoading] =        useState(true);
  const [nextAddress,   setNextAddress] =    useState('https://rickandmortyapi.com/api/character');
  const [showModal,     setShowModal] =      useState(false);
  const [characterModal,setCharacterModal] = useState({});
  const [showFilter,    setShowfilter] =     useState(false);

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
  const characterRender = ({item, index}) => {
    const inputRange = [-1,0,ITEM_SIZE*index,ITEM_SIZE*(index+2)]
    const opacityInputRange = [-1,0,ITEM_SIZE*index,ITEM_SIZE*(index+1)]
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1,1,1,0]
    })
    const opacity = scrollY.interpolate({
      inputRange: opacityInputRange,
      outputRange: [1,1,1,0]
    })
    return <TouchableHighlight onPress={() => { pressHandler(item) }} style={styles.touchableIcon}>
      <Animated.View style={{
              alignSelf: 'center',
              flexDirection: 'row',
              marginTop: SPACING,
              backgroundColor: 'rgba(0,0,0,0.8)',
              borderRadius: 12,
              height: PixelRatio.getPixelSizeForLayoutSize(60),
              width: '100%',
              transform:[{scale}],
              opacity
      }}>
        
        <Image style={styles.image} source={{uri: item.image}} />

        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.name}</Text>
        </View>

      </Animated.View>
    </TouchableHighlight>
  };

  const scrollY = React.useRef(new Animated.Value(0)).current;
  // ---------------------------------- Screen Render ---------------------------------- //
  return (    
    <SafeAreaView style={styles.SAVcontainer}>
      <HeaderBar
        filterEnabler={filterEnabler}
        closeHandler={closeHandler} />
      {loading ? (
        <ActivityIndicator size="large" animating={loading} />
      ) : (
        <Animated.FlatList
          style={styles.flatlistStyle}
          keyExtractor={item => item.id}
          data={characters}
          onEndReached={getNewCharactersFromAPI}
          renderItem={characterRender}
          contentContainerStyle={{
            padding: SPACING,
            paddingTop: 0,
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )} />
      )}
      <Modal transparent={true} visible={showModal} animationType="slide">
        <CharacterDetails
          character={characterModal}
          closeHandler={closeHandler} />
      </Modal>

      <Modal transparent={true} visible={showFilter} animationType="slide">
        <ModalFilter
          acceptHandler={acceptHandler}
          closeHandler={closeHandler} />
      </Modal>
    </SafeAreaView>
  );
}
