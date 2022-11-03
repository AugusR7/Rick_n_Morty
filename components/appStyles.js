import { PixelRatio, StyleSheet } from 'react-native';

const AVATAR_SIZE = 150; 
const SPACING = 20;

export default styles = StyleSheet.create({

  SAVcontainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
  
    flatlistStyle: {
      backgroundColor: '#555555',
      width: '100%',
      flex: 1
    },

    // characterRenderWrapper:{
    //   alignSelf: 'center',
    //   flexDirection: 'row',
    //   marginTop: SPACING,
    //   backgroundColor: 'rgba(0,0,0,0.8)',
    //   borderRadius: 12,
    //   height: PixelRatio.getPixelSizeForLayoutSize(60),
    //   width: '100%',
    //   transform:[{scale}]
    // },
    
    image: {
      borderRadius: AVATAR_SIZE,
      height: AVATAR_SIZE,
      width: AVATAR_SIZE,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: SPACING/2,
      marginRight: SPACING/2,
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
  
    // separator: {
    //   width: '100%',
    //   height: 1,
    //   backgroundColor: 'grey',
    // },
  
    modalTopBarContainer: {
      flexDirection: 'row',
      marginTop: 10,
    },
    
    topLeftIcon: {
      flex: 1,
    },

});