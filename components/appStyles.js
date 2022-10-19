import { PixelRatio, StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
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
      // height: 200,
      height: PixelRatio.getPixelSizeForLayoutSize(60),
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
  
    modalTopBarContainer: {
      flexDirection: 'row',
      marginTop: 10,
    },
    
    topLeftIcon: {
      flex: 1,
    },

});