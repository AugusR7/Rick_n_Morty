import React from "react";
import { useState } from "react";
import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";


export default function FilterScreen({ closeHandler, acceptHandler }) {
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
      {/* <SafeAreaView style={styles.modalContainer}> */}
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
                  <TouchableOpacity
                    onPress={() => {
                      statusFilter = "";
                      setStatusSelection(statusFilter);
                    }}
                    style={styles.itemContainerSelected}
                  >
                    <Text style={styles.detailedFilterItem}>Alive</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      statusFilter = "Alive";
                      setStatusSelection(statusFilter);
                    }}
                    style={styles.itemContainer}
                  >
                    <Text style={styles.detailedFilterItem}>Alive</Text>
                  </TouchableOpacity>
                </>
              )}

              {statusSelection === "Dead" ? (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      statusFilter = "";
                      setStatusSelection(statusFilter);
                    }}
                    style={styles.itemContainerSelected}
                  >
                    <Text style={styles.detailedFilterItem}>Dead</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      statusFilter = "Dead";
                      setStatusSelection(statusFilter);
                    }}
                    style={styles.itemContainer}
                  >
                    <Text style={styles.detailedFilterItem}>Dead</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
            <View style={styles.buttonFilterContainerSecondRow}>
              {statusSelection === "Unknown" ? (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      statusFilter = "";
                      setStatusSelection(statusFilter);
                    }}
                    style={styles.itemContainerSelected}
                  >
                    <Text style={styles.detailedFilterItem}>Unknown</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      statusFilter = "Unknown";
                      setStatusSelection(statusFilter);
                    }}
                    style={styles.itemContainer}
                  >
                    <Text style={styles.detailedFilterItem}>Unknown</Text>
                  </TouchableOpacity>
                </>
              )}

              {statusSelection === "" ? (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      statusFilter = "";
                      setStatusSelection(statusFilter);
                    }}
                    style={styles.itemContainerSelected}
                  >
                    <Text style={styles.detailedFilterItem}>All Status</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      statusFilter = "";
                      setStatusSelection(statusFilter);
                    }}
                    style={styles.itemContainer}
                  >
                    <Text style={styles.detailedFilterItem}>All Status</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>

          <View style={styles.filterContainer}>
            <Text style={styles.filterHeader}>Gender: </Text>
            <View style={styles.buttonFilterContainer}>
              {genderSelection === "Female" ? (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      genderFilter = "";
                      setGenderSelection(genderFilter);
                    }}
                    style={styles.itemContainerSelected}
                  >
                    <Text style={styles.detailedFilterItem}>Female</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      {
                        genderFilter = "Female";
                        setGenderSelection(genderFilter);
                      }
                    }}
                    style={styles.itemContainer}
                  >
                    <Text style={styles.detailedFilterItem}>Female</Text>
                  </TouchableOpacity>
                </>
              )}

              {genderSelection === "Male" ? (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      genderFilter = "";
                      setGenderSelection(genderFilter);
                    }}
                    style={styles.itemContainerSelected}
                  >
                    <Text style={styles.detailedFilterItem}>Male</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      genderFilter = "Male";
                      setGenderSelection(genderFilter);
                    }}
                    style={styles.itemContainer}
                  >
                    <Text style={styles.detailedFilterItem}>Male</Text>
                  </TouchableOpacity>
                </>
              )}

              {genderSelection === "Genderless" ? (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      genderFilter = "";
                      setGenderSelection(genderFilter);
                    }}
                    style={styles.itemContainerSelected}
                  >
                    <Text style={styles.detailedFilterItem}>Genderless</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      genderFilter = "Genderless";
                      setGenderSelection(genderFilter);
                    }}
                    style={styles.itemContainer}
                  >
                    <Text style={styles.detailedFilterItem}>Genderless</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
            <View style={styles.buttonFilterContainerSecondRow}>
              {genderSelection === "Unknown" ? (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      genderFilter = "";
                      setGenderSelection(genderFilter);
                    }}
                    style={styles.itemContainerSelected}
                  >
                    <Text style={styles.detailedFilterItem}>Unknown</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      genderFilter = "Unknown";
                      setGenderSelection(genderFilter);
                    }}
                    style={styles.itemContainer}
                  >
                    <Text style={styles.detailedFilterItem}>Unknown</Text>
                  </TouchableOpacity>
                </>
              )}

              {genderSelection === "" ? (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      genderFilter = "";
                      setGenderSelection(genderFilter);
                    }}
                    style={styles.itemContainerSelected}
                  >
                    <Text style={styles.detailedFilterItem}>All Gender</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      genderFilter = "";
                      setGenderSelection(genderFilter);
                    }}
                    style={styles.itemContainer}
                  >
                    <Text style={styles.detailedFilterItem}>All Gender</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottomButtonsContainer}>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                closeHandler();
                navigation.navigate("HomeScreen");
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
            </TouchableOpacity>
          </View>
          <View style={styles.acceptButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                var filterAttributes = [
                  nameFilter,
                  speciesFilter,
                  typeFilter,
                  statusSelection,
                  genderSelection,
                ];
                acceptHandler(filterAttributes);
                navigation.navigate("HomeScreen");
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
            </TouchableOpacity>
          </View>
        </View>
      {/* </SafeAreaView> */}
    </>
  );
}
