import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { Animated, Text, View, Button, ActivityIndicator, FlatList, Image, SafeAreaView, TouchableHighlight, Modal, PixelRatio} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HeaderBar from './components/HeaderBar/headerBar';
import CharacterDetails from './components/Modals/CharacterDetails/ModalCharacters';
import ModalFilter from './components/Modals/Filter/ModalFilter'
import styles from './appStyles';

const AVATAR_SIZE = 150; 
const SPACING = 20;
const ITEM_SIZE = AVATAR_SIZE + SPACING*3;
//const scrollY = React.useRef(new Animated.Value(0)).current;
const Drawer = createDrawerNavigator();


export default function App() {
  // ---------------------------------- State declarations ---------------------------------- //
  const [characters,    setCharacters] =     useState();
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
    navigation.goBack();
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
    // const inputRange = [-1,0,ITEM_SIZE*index,ITEM_SIZE*(index+2)]
    // const opacityInputRange = [-1,0,ITEM_SIZE*index,ITEM_SIZE*(index+1)]
    // const scale = scrollY.interpolate({
    //   inputRange,
    //   outputRange: [1,1,1,0]
    // })
    // const opacity = scrollY.interpolate({
    //   inputRange: opacityInputRange,
    //   outputRange: [1,1,1,0]
    // })
    return <TouchableHighlight onPress={() => { pressHandler(item) }} style={styles.touchableIcon}>
      <View style={styles.characterRenderWrapper}>
        
        <Image style={styles.image} source={{uri: item.image}} />

        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.name}</Text>
        </View>

      </View>
    </TouchableHighlight>
  };



  // ---------------------------------- Navigation Panes ---------------------------------- //
  function HomeScreen({ navigation }) {
    return (
      
      <SafeAreaView style={styles.SAVcontainer}>
        <HeaderBar
           filterEnabler={filterEnabler}
           closeHandler={closeHandler}
        />

        {loading ? (
          <ActivityIndicator size="large" animating={loading} />
        ) : (

        <FlatList
          style={styles.flatlistStyle}
          keyExtractor={item => item.id}
          data={characters}
          onEndReached={getNewCharactersFromAPI}
          renderItem={characterRender}
          contentContainerStyle={{
            padding: SPACING,
            paddingTop: 0,
          }}
        />
        )}

        <Modal transparent={true} visible={showModal} animationType="slide">
          <CharacterDetails
            character={characterModal}
            closeHandler={closeHandler} />
        </Modal>

      </SafeAreaView>
    );
  }

  function FilterScreen({ navigation }) {
    return (
      <ModalFilter
      acceptHandler={acceptHandler}
      closeHandler={closeHandler} />
    );
  }

  // ---------------------------------- Screen Render ---------------------------------- //
  return (    
  <NavigationContainer>
    <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Filter" component={FilterScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}


{/* <SafeAreaView style={styles.SAVcontainer}>
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
</SafeAreaView> */}