import "react-native-gesture-handler";
import React from "react";
import { useEffect, useState } from "react";
import {
  Animated,
  Text,
  View,
  ActivityIndicator,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  PixelRatio,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import HeaderBar from "../components/HeaderBar/headerBar";
import CharacterDetails from "../components/CharacterDetails/ModalCharacters";
import FilterScreenRenderer from "../components/Filter/FilterScreenRenderer";
import styles from "./appStyles";
import { Header } from "react-native/Libraries/NewAppScreen";
// Redux imports
import {useSelector, useDispatch} from 'react-redux';
import { fetchInitialCharacters, charactersSelector, fetchNewCharacters, fetchFilteredCharacters } from "../slices/characters";
import appStyles from "./appStyles";


const AVATAR_SIZE = 150;
const SPACING = 20;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 2.5;
const HEIGHT = PixelRatio.getPixelSizeForLayoutSize(60);
const Drawer = createDrawerNavigator();

export default function mainScreen() {
    // ---------------------------------- Redux declarations ---------------------------------- //
  const dispatch = useDispatch();
  const { characters, loading, hasErrors } = useSelector(charactersSelector);

  useEffect(() => {
    dispatch(fetchInitialCharacters());
  }, [dispatch]);


  // ---------------------------------- State declarations ---------------------------------- //
  // const [characters, setCharacters] = useState();
  // const [loading, setLoading] = useState(true);
  const [nextAddress, setNextAddress] = useState(
    "https://rickandmortyapi.com/api/character"
  );
  const [showModal, setShowModal] = useState(false);
  const [characterModal, setCharacterModal] = useState({});
  const [showFilter, setShowfilter] = useState(false);
  const scrollY = React.useRef(new Animated.Value(0)).current;

  // // ---------------------------------- Callbacks (handlers) ---------------------------------- //
  // const generateSearchAddress = (filterAttributes) => {
  //   var address =
  //     "https://rickandmortyapi.com/api/character?" +
  //     "name=" +
  //     filterAttributes[0] +
  //     "&species=" +
  //     filterAttributes[1] +
  //     "&type=" +
  //     filterAttributes[2] +
  //     "&status=" +
  //     filterAttributes[3] +
  //     "&gender=" +
  //     filterAttributes[4];
  //   console.log("[Address] Generé: " + address);
  //   setNextAddress(address);
  //   getCharactersFromAPI(address);
  // };

  // // ---------------------------------- Fetch functions ---------------------------------- //
  // const getCharactersFromAPI = (filteredAddress) => {
  //   // console.log("[Fetch] Me llamaron con: " + filteredAddress + "\n");
  //   // fetch(filteredAddress)
  //   //   .then((response) => response.json())
  //   //   .then((response) => {
  //   //     setCharacters(response.results);
  //   //     setNextAddress(response.info.next);
  //   //     setLoading(false);
  //   //   });
  // };

  const getNewCharactersFromAPI = () => {
    dispatch(fetchNewCharacters());
    // fetch(nextAddress)
    //   .then((response) => response.json())
    //   .then((response) => {
    //     setCharacters(() => {
    //       let prevCharacters = characters;
    //       let newCharacters = response.results;
    //       let result = [...prevCharacters, ...newCharacters];
    //       return result;
    //     });
    //     setNextAddress(response.info.next);
    //     setLoading(false);
    //   });
  };

  // useEffect(() => {
  //   getCharactersFromAPI(nextAddress);
  // }, []);

  // ---------------------------------- Press handlers ---------------------------------- //
  const pressHandler = (character) => {
    setShowModal(true);
    setCharacterModal(character);
  };
  const acceptHandler = (filterAttributes) => {
    setShowModal(false);
    setShowfilter(false);
    setCharacterModal({});
    dispatch(fetchFilteredCharacters(filterAttributes));
    // generateSearchAddress(filterAttributes);
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
  function characterRender({ item, index }) {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    
    const opacityInputRange = [
      -1,
      0,
      ITEM_SIZE * index,
      ITEM_SIZE * (index + 1),
    ];
    
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });
    
    const opacity = scrollY.interpolate({
      inputRange: opacityInputRange,
      outputRange: [1, 1, 1, 0],
    });

    return (
      <TouchableOpacity
        onPress={() => {
          pressHandler(item);
        }}
        style={styles.touchableIcon}
      >
        <Animated.View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            marginTop: SPACING,
            backgroundColor: "rgba(0,0,0,0.8)",
            borderRadius: 12,
            height: HEIGHT,
            width: "100%",
            transform: [{ scale }],
            opacity,
          }}
        >
          <Image style={styles.image} source={{ uri: item.image }} />
          <View style={styles.starContainer}>
            {item.fav ? (<Image style={styles.star} source={require("../components/yellow-star.png")} /> ):(null)}
            {/* <Image style={styles.star} source={require("../components/yellow-star.png")} />  */}
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  }

  // ---------------------------------- Navigation Panes ---------------------------------- //
  function HomeScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.SAVcontainer}>
        <HeaderBar filterEnabler={filterEnabler} closeHandler={closeHandler} />
      
        {loading ? (
          <ActivityIndicator size="large" animating={loading} />
        ) : (
          <Animated.FlatList
            style={styles.flatlistStyle}
            keyExtractor={(item) => item.id}
            data={characters}
            renderItem={characterRender}
            onEndReached={getNewCharactersFromAPI}
            contentContainerStyle={{
              padding: SPACING,
              paddingTop: 0,
            }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
          />
        )}

        <Modal transparent={true} visible={showModal} animationType="slide">
          <CharacterDetails
            character={characterModal}
            closeHandler={closeHandler}
          />
        </Modal>
      </SafeAreaView>
    );
  }

  function FilterScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.SAVcontainer}>
        <HeaderBar filterEnabler={filterEnabler} closeHandler={closeHandler} />
        <FilterScreenRenderer acceptHandler={acceptHandler} closeHandler={closeHandler} />
      </SafeAreaView>
    );
  }

  function FavoritesScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.SAVcontainer}>
        <HeaderBar filterEnabler={filterEnabler} closeHandler={closeHandler} />
        <FavoritesScreenRenderer acceptHandler={acceptHandler} closeHandler={closeHandler} />
      </SafeAreaView>
    );
  }

  return(
    <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              backgroundColor: "black",
            },
            headerShown: false,
            drawerActiveBackgroundColor: "lightyellow",
            drawerLabelStyle: {
              marginLeft: 25,
              fontSize: 15,
              fontWeight: "bold",
              color: "darkgrey",
            },
          }}
          //useLegacyImplementation={true}
          initialRouteName="HomeScreen"
        >
          <Drawer.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerTitle: () => <HeaderBar name="HomeScreen" /> }}
          />
          <Drawer.Screen
            name="FilterScreen"
            component={FilterScreen}
            options={{ headerTitle: () => <HeaderBar name="FilterScreen" /> }}
          />       
          <Drawer.Screen
            name="FavoritesScreen"
            component={FavoritesScreen}
            options={{ headerTitle: () => <HeaderBar name="FavoritesScreen" /> }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
  )
}