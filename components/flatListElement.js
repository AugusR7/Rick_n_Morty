import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, SafeAreaView } from 'react-native';


export default function App() {

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
        <FlatList
          style = {styles.listElement}
          keyExtractor = {item => item.id}
          data = {characters}
          onEndReached = {getNewCharactersFromAPI}
          renderItem = {characterRender}
          ItemSeparatorComponent={ () => <View style={styles.separator} /> }
        />
    );
};

const styles = StyleSheet.create({
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
});