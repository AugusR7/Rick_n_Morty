import React from "react";
import { useState } from "react";
import {
  Text,
  ScrollView,
  View,
  Image,
  SafeAreaView,
  TouchableHighlight,
  TextInput,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";


export default function ModalFilter({ closeHandler, acceptHandler }) {
  const [statusSelection, setStatusSelection] = useState("");
  const [genderSelection, setGenderSelection] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const navigation = useNavigation();

  var statusFilter = "";
  var genderFilter = "";

  return (
    <>
      <SafeAreaView style={styles.modalContainer}>
        <Text style={styles.introductionText}>FILTER BY:</Text>
        <View style={styles.modalSeparator} />

        <ScrollView>
          <View style={styles.filterContainer}>
            <Text style={styles.filterHeader}>Name: </Text>
            <View style={styles.textFilterContainer}>
              <TextInput
                style={styles.filterTextInput}
                placeholder="Insert NAME"
                placeholderTextColor="gray"
                value={nameFilter}
                onChangeText={setNameFilter}
                onSubmitEditing={() => setNameFilter(nameFilter)}
              />
            </View>
          </View>

          <View style={styles.filterContainer}>
            <Text style={styles.filterHeader}>Species: </Text>
            <View style={styles.textFilterContainer}>
              <TextInput
                style={styles.filterTextInput}
                placeholder="Insert SPECIES"
                placeholderTextColor="gray"
                value={speciesFilter}
                onChangeText={setSpeciesFilter}
                onSubmitEditing={() => setSpeciesFilter(speciesFilter)}
              />
            </View>
          </View>

          <View style={styles.filterContainer}>
            <Text style={styles.filterHeader}>Type: </Text>
            <View style={styles.textFilterContainer}>
              <TextInput
                style={styles.filterTextInput}
                placeholder="Insert TYPE"
                placeholderTextColor="gray"
                value={typeFilter}
                onChangeText={setTypeFilter}
                onSubmitEditing={() => setTypeFilter(typeFilter)}
              />
            </View>
          </View>

          <View style={styles.filterContainer}>
            <Text style={styles.filterHeader}>Status: </Text>
            <View style={styles.buttonFilterContainer}>
              {statusSelection === "Alive" ? (
                <>
                  <TouchableHighlight
                    onPress={() => {
                      statusFilter = "";
                      setStatusSelection(statusFilter);
                    }}
                    style={styles.itemContainerSelected}
                  >
                    <Text style={styles.detailedFilterItem}>Alive</Text>
                  </TouchableHighlight>
                </>
              ) : (
                <>
                  <TouchableHighlight
                    onPress={() => {
                      statusFilter = "Alive";
                      setStatusSelection(statusFilter);
                    }}
                    style={styles.itemContainer}
                  >
                    <Text style={styles.detailedFilterItem}>Alive</Text>
                  </TouchableHighlight>
                </>
              )}

              {statusSelection === "Dead" ? (
                <>
                  <TouchableHighlight
                    onPress={() => {
                      statusFilter = "";
                      setStatusSelection(statusFilter);
                    }}
                    style={styles.itemContainerSelected}
                  >
                    <Text style={styles.detailedFilterItem}>Dead</Text>
                  </TouchableHighlight>
                </>
              ) : (
                <>
                  <TouchableHighlight
                    onPress={() => {
                      statusFilter = "Dead";
                      setStatusSelection(statusFilter);
                    }}
                    style={styles.itemContainer}
                  >
                    <Text style={styles.detailedFilterItem}>Dead</Text>
                  </TouchableHighlight>
                </>
              )}
            </View>
            <View style={styles.buttonFilterContainerSecondRow}>
              {statusSelection === "Unknown" ? (
                <>
                  <TouchableHighlight
                    onPress={() => {
                      statusFilter = "";
                      setStatusSelection(statusFilter);
                    }}
                    style={styles.itemContainerSelected}
                  >
                    <Text style={styles.detailedFilterItem}>Unknown</Text>
                  </TouchableHighlight>
                </>
              ) : (
                <>
                  <TouchableHighlight
                    onPress={() => {
                      statusFilter = "Unknown";
                      setStatusSelection(statusFilter);
                    }}
                    style={styles.itemContainer}
                  >
                    <Text style={styles.detailedFilterItem}>Unknown</Text>
                  </TouchableHighlight>
                </>
              )}

              {statusSelection === "" ? (
                <>
                  <TouchableHighlight
                    onPress={() => {
                      statusFilter = "";
                      setStatusSelection(statusFilter);
                    }}
                    style={styles.itemContainerSelected}
                  >
                    <Text style={styles.detailedFilterItem}>All Status</Text>
                  </TouchableHighlight>
                </>
              ) : (
                <>
                  <TouchableHighlight
                    onPress={() => {
                      statusFilter = "";
                      setStatusSelection(statusFilter);
                    }}
                    style={styles.itemContainer}
                  >
                    <Text style={styles.detailedFilterItem}>All Status</Text>
                  </TouchableHighlight>
                </>
              )}
            </View>
          </View>

          <View style={styles.filterContainer}>
            <Text style={styles.filterHeader}>Gender: </Text>
            <View style={styles.buttonFilterContainer}>
              {genderSelection === "Female" ? (
                <>
                  <TouchableHighlight
                    onPress={() => {
                      genderFilter = "";
                      setGenderSelection(genderFilter);
                    }}
                    style={styles.itemContainerSelected}
                  >
                    <Text style={styles.detailedFilterItem}>Female</Text>
                  </TouchableHighlight>
                </>
              ) : (
                <>
                  <TouchableHighlight
                    onPress={() => {
                      {
                        genderFilter = "Female";
                        setGenderSelection(genderFilter);
                      }
                    }}
                    style={styles.itemContainer}
                  >
                    <Text style={styles.detailedFilterItem}>Female</Text>
                  </TouchableHighlight>
                </>
              )}

              {genderSelection === "Male" ? (
                <>
                  <TouchableHighlight
                    onPress={() => {
                      genderFilter = "";
                      setGenderSelection(genderFilter);
                    }}
                    style={styles.itemContainerSelected}
                  >
                    <Text style={styles.detailedFilterItem}>Male</Text>
                  </TouchableHighlight>
                </>
              ) : (
                <>
                  <TouchableHighlight
                    onPress={() => {
                      genderFilter = "Male";
                      setGenderSelection(genderFilter);
                    }}
                    style={styles.itemContainer}
                  >
                    <Text style={styles.detailedFilterItem}>Male</Text>
                  </TouchableHighlight>
                </>
              )}

              {genderSelection === "Genderless" ? (
                <>
                  <TouchableHighlight
                    onPress={() => {
                      genderFilter = "";
                      setGenderSelection(genderFilter);
                    }}
                    style={styles.itemContainerSelected}
                  >
                    <Text style={styles.detailedFilterItem}>Genderless</Text>
                  </TouchableHighlight>
                </>
              ) : (
                <>
                  <TouchableHighlight
                    onPress={() => {
                      genderFilter = "Genderless";
                      setGenderSelection(genderFilter);
                    }}
                    style={styles.itemContainer}
                  >
                    <Text style={styles.detailedFilterItem}>Genderless</Text>
                  </TouchableHighlight>
                </>
              )}
            </View>
            <View style={styles.buttonFilterContainerSecondRow}>
              {genderSelection === "Unknown" ? (
                <>
                  <TouchableHighlight
                    onPress={() => {
                      genderFilter = "";
                      setGenderSelection(genderFilter);
                    }}
                    style={styles.itemContainerSelected}
                  >
                    <Text style={styles.detailedFilterItem}>Unknown</Text>
                  </TouchableHighlight>
                </>
              ) : (
                <>
                  <TouchableHighlight
                    onPress={() => {
                      genderFilter = "Unknown";
                      setGenderSelection(genderFilter);
                    }}
                    style={styles.itemContainer}
                  >
                    <Text style={styles.detailedFilterItem}>Unknown</Text>
                  </TouchableHighlight>
                </>
              )}

              {genderSelection === "" ? (
                <>
                  <TouchableHighlight
                    onPress={() => {
                      genderFilter = "";
                      setGenderSelection(genderFilter);
                    }}
                    style={styles.itemContainerSelected}
                  >
                    <Text style={styles.detailedFilterItem}>All Gender</Text>
                  </TouchableHighlight>
                </>
              ) : (
                <>
                  <TouchableHighlight
                    onPress={() => {
                      genderFilter = "";
                      setGenderSelection(genderFilter);
                    }}
                    style={styles.itemContainer}
                  >
                    <Text style={styles.detailedFilterItem}>All Gender</Text>
                  </TouchableHighlight>
                </>
              )}
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottomButtonsContainer}>
          <View style={styles.closeButtonContainer}>
            <TouchableHighlight
              onPress={() => {
                closeHandler();
                navigation.navigate("Home");
              }}
              style={styles.touchableIcon}
            >
              <>
                <Image
                  style={styles.closeButton}
                  source={require("../close_button_icon.png")}
                />
                <Text style={styles.buttonLegend}> Close </Text>
              </>
            </TouchableHighlight>
          </View>
          <View style={styles.acceptButtonContainer}>
            <TouchableHighlight
              onPress={() => {
                var filterAttributes = [
                  nameFilter,
                  speciesFilter,
                  typeFilter,
                  statusSelection,
                  genderSelection,
                ];
                acceptHandler(filterAttributes);
                navigation.navigate("Home");
              }}
              style={styles.touchableIcon}
            >
              <>
                <Image
                  style={styles.applyButton}
                  source={require("../accept_button_icon.png")}
                />
                <Text style={styles.buttonLegend}> Apply </Text>
              </>
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
