import React, { useState } from 'react';
import { Text, View, Image, SafeAreaView, TouchableHighlight, TextInput} from 'react-native';
import styles from './styles';

export default function ModalFilter({closeHandler, searchByName, searchBySpecies, searchByType, searchByStatus, searchByGender, acceptHandler} ) {
  // const [nameFilter, setNameFilter ] = useState('')
  // const [speciesFilter, setSpeciesFilter ] = useState('')
  // const [typeFilter, setTypeFilter ] = useState('')
  const [statusSelection,  setStatusSelection] =   useState('');
  const [genderSelection,  setGenderSelection] =   useState('');
  const [nameFilter,  setNameFilter] =   useState('');
  const [speciesFilter,  setSpeciesFilter] =   useState('');
  const [typeFilter,  setTypeFilter] =   useState('');

  //var nameFilter = '';
  //var speciesFilter = '';
  //var typeFilter = '';
  var statusFilter = '';
  var genderFilter = '';
  var filterAttributes = [nameFilter,speciesFilter,typeFilter,statusFilter,genderFilter];

  return (
    <>
      <SafeAreaView style={styles.modalContainer}>
        <Text style={styles.introductionText}> CHARACTER FILTERS</Text>
        <View style={styles.modalSeparator}/>

        <View style={styles.filterContainer}>
          <Text style={styles.filterHeader}>Name: </Text>
          <View style={styles.textFilterContainer}>
            <TextInput 
              style={styles.filterTextInput}
              placeholder = "Insert NAME"
              placeholderTextColor= 'gray'
              value = {nameFilter}
              onChangeText = {setNameFilter}
              onSubmitEditing={() => searchByName(nameFilter)}
            />
          </View>
        </View>

        <View style={styles.filterContainer}>
          <Text style={styles.filterHeader}>Species: </Text>
          <View style={styles.textFilterContainer}>
            <TextInput 
              style={styles.filterTextInput}
              placeholder = "Insert SPECIES"
              placeholderTextColor= 'gray'
              value = {speciesFilter}
              onChangeText = {setSpeciesFilter}
              onSubmitEditing={() => searchBySpecies(speciesFilter)}
            />
          </View>
        </View>

        <View style={styles.filterContainer}>
          <Text style={styles.filterHeader}>Type: </Text>
          <View style={styles.textFilterContainer}>
            <TextInput 
              style={styles.filterTextInput}
              placeholder = "Insert TYPE"
              placeholderTextColor= 'gray'
              value = {typeFilter}
              onChangeText = {setTypeFilter}
              onSubmitEditing={() => searchByType(typeFilter)}
            />
          </View>
        </View>

        <View style={styles.filterContainer}>
          <Text style={styles.filterHeader}>Status: </Text>
          <View style={styles.buttonFilterContainer}>
            {statusSelection==='Alive'? (
            <>
              <TouchableHighlight onPress={() => {statusFilter=''; setStatusSelection(''); searchByStatus(statusFilter)}} style={styles.itemContainerSelected}>
                <Text style={styles.detailedFilterItem}>Alive</Text>
              </TouchableHighlight>
            </>):(
            <>
              <TouchableHighlight onPress={() => {statusFilter='Alive'; setStatusSelection('Alive'); searchByStatus(statusFilter)}} style={styles.itemContainer}>
                <Text style={styles.detailedFilterItem}>Alive</Text>
              </TouchableHighlight>
            </>)}
            
            {statusSelection==='Dead'? (
            <>
              <TouchableHighlight onPress={() => {statusFilter=''; setStatusSelection(''); searchByStatus(statusFilter)}} style={styles.itemContainerSelected}>
              <Text style={styles.detailedFilterItem}>Dead</Text>
            </TouchableHighlight>
            </>):(
            <>
              <TouchableHighlight onPress={() => {statusFilter='Dead'; setStatusSelection('Dead');searchByStatus(statusFilter)}} style={styles.itemContainer}>
              <Text style={styles.detailedFilterItem}>Dead</Text>
            </TouchableHighlight>
            </>)}

            {statusSelection==='Unknown'? (
            <>
              <TouchableHighlight onPress={() => {statusFilter=''; setStatusSelection('');searchByStatus(statusFilter)}} style={styles.itemContainerSelected}>
              <Text style={styles.detailedFilterItem}>Unknown</Text>
            </TouchableHighlight>
            </>):(
            <>
              <TouchableHighlight onPress={() => {statusFilter='Unknown'; setStatusSelection('Unknown');searchByStatus(statusFilter)}} style={styles.itemContainer}>
              <Text style={styles.detailedFilterItem}>Unknown</Text>
            </TouchableHighlight>
            </>)}

            {statusSelection===''? (
            <>
              <TouchableHighlight onPress={() => {statusFilter=''; setStatusSelection('');searchByStatus(statusFilter)}} style={styles.itemContainerSelected}>
              <Text style={styles.detailedFilterItem}>All Status</Text>
            </TouchableHighlight>
            </>):(
            <>
              <TouchableHighlight onPress={() => {statusFilter=''; setStatusSelection('');searchByStatus(statusFilter)}} style={styles.itemContainer}>
              <Text style={styles.detailedFilterItem}>All Status</Text>
            </TouchableHighlight>
            </>)}
            
          </View>
        </View>

        <View style={styles.filterContainer}>
          <Text style={styles.filterHeader}>Gender: </Text>
          <View style={styles.buttonFilterContainer}>
            {genderFilter === "Female"? (
              <>
                <TouchableHighlight onPress={() => {genderFilter=''; setGenderSelection(''); searchByGender(genderFilter)}} style={styles.itemContainerSelected}>
                <Text style={styles.detailedFilterItem}>Female</Text>
              </TouchableHighlight>
              </>):(
              <>
                <TouchableHighlight onPress={() => {{genderFilter='Female'; setGenderSelection('Female'); searchByGender(genderFilter)}}} style={styles.itemContainer}>
                <Text style={styles.detailedFilterItem}>Female</Text>
              </TouchableHighlight>
            </>)}

            {genderFilter === "Male"? (
              <>
                <TouchableHighlight onPress={() => {genderFilter=''; setGenderSelection(''); searchByGender(genderFilter)}} style={styles.itemContainerSelected}>
                <Text style={styles.detailedFilterItem}>Male</Text>
              </TouchableHighlight>
              </>):(
              <>
                <TouchableHighlight onPress={() => {genderFilter='Male'; setGenderSelection('Male'); searchByGender(genderFilter)}} style={styles.itemContainer}>
                <Text style={styles.detailedFilterItem}>Male</Text>
              </TouchableHighlight>
            </>)}

            {genderFilter === "Genderless"? (
              <>
                <TouchableHighlight onPress={() => {genderFilter=''; setGenderSelection(''); searchByGender(genderFilter)}} style={styles.itemContainerSelected}>
                <Text style={styles.detailedFilterItem}>Genderless</Text>
              </TouchableHighlight>
              </>):(
              <>
                <TouchableHighlight onPress={() => {genderFilter='Genderless'; setGenderSelection('Genderless'); searchByGender(genderFilter)}} style={styles.itemContainer}>
                <Text style={styles.detailedFilterItem}>Genderless</Text>
              </TouchableHighlight>
            </>)}

          </View>
          <View style={styles.buttonFilterContainerSecondRow}>
            {genderFilter === "Unknown"? (
              <>
                <TouchableHighlight onPress={() => {genderFilter=''; setGenderSelection(''); searchByGender(genderFilter)}} style={styles.itemContainerSelected}>
                <Text style={styles.detailedFilterItem}>Unknown</Text>
              </TouchableHighlight>
              </>):(
              <>
                <TouchableHighlight onPress={() => {genderFilter='Unknown'; setGenderSelection('Unknown'); searchByGender(genderFilter)}} style={styles.itemContainer}>
                <Text style={styles.detailedFilterItem}>Unknown</Text>
              </TouchableHighlight>
            </>)}

            {genderFilter === ''? (
              <>
                <TouchableHighlight onPress={() => {genderFilter=''; setGenderSelection(''); searchByGender(genderFilter)}} style={styles.itemContainerSelected}>
                <Text style={styles.detailedFilterItem}>All Gender</Text>
              </TouchableHighlight>
              </>):(
              <>
                <TouchableHighlight onPress={() => {genderFilter=''; setGenderSelection(''); searchByGender(genderFilter)}} style={styles.itemContainer}>
                <Text style={styles.detailedFilterItem}>All Gender</Text>
              </TouchableHighlight>
            </>)}

          </View>
        </View>
        
        
        <View style={styles.bottomButtonsContainer}>
          <View style={styles.closeButtonContainer}>
              <TouchableHighlight onPress={() => closeHandler()} style={styles.touchableIcon}>
                  <Image style={styles.closeButton} source={require('../close_button_icon.png')}/>
              </TouchableHighlight>
          </View>
          <View style={styles.acceptButtonContainer}>
              <TouchableHighlight onPress={() => acceptHandler()} style={styles.touchableIcon}>
                  <Image style={styles.closeButton} source={require('../accept_button_icon.png')}/>
              </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};