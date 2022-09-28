import React from 'react';
import { Text, View, Image, SafeAreaView, TouchableHighlight} from 'react-native';
import styles from './styles';

export default function ModalFilter({closeHandler} ) {
    return (
      <>
        <SafeAreaView style={styles.modalContainer}>
            <Text style={styles.detailedName}> CHARACTER FILTER</Text>

          {/* <Text style={styles.detailedName}>{character.name}</Text> */}

          <View style={styles.modalSeparator}/>

          <View style={styles.characterDetailContainer}>
            <Text style={styles.characterDetailHeader}>{'Status: '} </Text>
            {/* { character.status === 'Alive' ? ( <Image style={styles.characterDetailIcon} source={require('./green_heart.png')}/> ):(<></>)}
            { character.status === 'Dead' ? ( <Image style={styles.characterDetailIcon} source={require('./rip.png')}/> ):(<></>)}
            { character.status === 'unknown' ? ( <Image style={styles.characterDetailIcon} source={require('./unknown_icon.png')}/> ):(<></>)} */}
          </View>
          
          <View style={styles.closeButtonContainer}>
              <TouchableHighlight onPress={() => closeHandler()} style={styles.touchableIcon}>
                  <Image style={styles.closeButton} source={require('../close_button_icon.png')}/>
              </TouchableHighlight>
          </View>
        </SafeAreaView>
      </>
    );
  };