import React, { useState } from 'react';
import { Text, View, Image, SafeAreaView, TouchableHighlight, TextInput} from 'react-native';
import styles from './styles';

export default function ModalFilter({closeHandler, searchByName, searchBySpecies, searchByType, searchByStatus, searchByGender} ) {
  // const [nameFilter, setNameFilter ] = useState('')
  // const [speciesFilter, setSpeciesFilter ] = useState('')
  // const [typeFilter, setTypeFilter ] = useState('')
  const [statusSelection,  setStatusSelection] =   useState('');
  const [genderSelection,  setGenderSelection] =   useState('');
  var nameFilter = '';
  var speciesFilter = '';
  var typeFilter = '';
  var statusFilter = '';
  var genderFilter = '';
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
              // value = {nameFilter}
              placeholder = "Character NAME..."
              placeholderTextColor= 'black'
              onChange={() => searchByName(nameFilter)}
            />
          </View>
        </View>

        <View style={styles.filterContainer}>
          <Text style={styles.filterHeader}>Species: </Text>
          <View style={styles.textFilterContainer}>
            <TextInput 
              style={styles.filterTextInput}
              value = {speciesFilter}
              placeholder = "Character SPECIES..."
              placeholderTextColor= 'black'
              onChange={() => searchBySpecies(speciesFilter)}
            />
          </View>
        </View>

        <View style={styles.filterContainer}>
          <Text style={styles.filterHeader}>Type: </Text>
          <View style={styles.textFilterContainer}>
            <TextInput 
              style={styles.filterTextInput}
              value = {typeFilter}
              placeholder = "Character TYPE..."
              placeholderTextColor= 'black'
              onChange={() => searchByType(typeFilter)}
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
        
        <View style={styles.closeButtonContainer}>
            <TouchableHighlight onPress={() => closeHandler()} style={styles.touchableIcon}>
                <Image style={styles.closeButton} source={require('../close_button_icon.png')}/>
            </TouchableHighlight>
        </View>
      </SafeAreaView>
    </>
  );
};