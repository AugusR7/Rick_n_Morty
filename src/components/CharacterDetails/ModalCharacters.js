import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import {useSelector, useDispatch} from 'react-redux';
import { fetchInitialCharacters, charactersSelector, fetchNewCharacters, fetchFilteredCharacters, writeFavouriteCharacter, removeFavouriteCharacter, addFavouriteCharacter, addNewFavouriteCharacter, removeAFavouriteCharacter, addCommentToCharacter } from "../../slices/characters";

export default function CharacterDetails({ character, closeHandler }) {
  const dispatch = useDispatch();
  const { characters, favouriteCharacters, favouriteCharactersId, loading, hasErrors } = useSelector(charactersSelector);
  const [comment, setComment] = useState(character.comment);

  const commentHandler = (comment)=>{
    setComment(comment); 
    character.comment = comment;
    dispatch(addCommentToCharacter({character}));
  }
  return (
    <>
      <View style={styles.modalContainer}>
        <View style={styles.modalImageContainer}>
          <Image style={styles.modalImage} source={{ uri: character.image }} />
        </View>

        <View style={styles.closeButtonContainer}>
          <TouchableOpacity
            onPress={() => closeHandler()}
            style={styles.touchableIcon}
          >
            <Image
              style={styles.closeButton}
              source={require("../close_button_icon.png")}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.detailedName}>{character.name}</Text>


        <View style={styles.modalSeparator} />
        <ScrollView>
          <View style={styles.characterDetailContainer}>
            <Text style={styles.characterDetailHeader}>{"Status: "} </Text>

            {character.status === "Alive" ? (
              <>
                <Image
                  style={styles.characterDetailIcon}
                  source={require("./green_heart.png")}
                />
                <Text style={styles.aliveStatus}> {character.status}</Text>
              </>
            ) : (
              <></>
            )}
            {character.status === "Dead" ? (
              <>
                <Image
                  style={styles.characterDetailIcon}
                  source={require("./rip.png")}
                />
                <Text style={styles.deadStatus}> {character.status}</Text>
              </>
            ) : (
              <></>
            )}
            {character.status === "unknown" ? (
              <>
                <Image
                  style={styles.characterDetailIcon}
                  source={require("./unknown_icon.png")}
                />
                <Text style={styles.characterInformationText}>
                  {" "}
                  {character.status}
                </Text>
              </>
            ) : (
              <></>
            )}
          </View>

          <View style={styles.characterDetailContainer}>
            <Text style={styles.characterDetailHeader}>{"Gender: "} </Text>
            <View style={styles.characteDetailContent}>
              {character.gender === "Male" ? (
                <Image
                  style={styles.characterDetailIcon}
                  source={require("./male_icon.png")}
                />
              ) : (
                <></>
              )}
              {character.gender === "Female" ? (
                <Image
                  style={styles.characterDetailIcon}
                  source={require("./female_icon.png")}
                />
              ) : (
                <></>
              )}
              {character.gender === "unknown" ? (
                <Image
                  style={styles.characterDetailIcon}
                  source={require("./unknown_icon.png")}
                />
              ) : (
                <></>
              )}
              <Text style={styles.characterInformationText}>
                {" "}
                {character.gender}
              </Text>
            </View>
          </View>

          <View style={styles.characterDetailContainer}>
            <Text style={styles.characterDetailHeader}>{"Species: "} </Text>
            <View style={styles.characteDetailContent}>
              <View>
                <Text style={styles.characterInformationText}>
                  {" "}
                  {character.species}
                </Text>
                {character.type !== "" ? (
                  <Text style={styles.characterInformationText}>
                    {" "}
                    ({character.type})
                  </Text>
                ) : (
                  <></>
                )}
              </View>
            </View>
          </View>

          <View style={styles.characterDetailContainerTruncated}>
            <Text style={styles.characterDetailHeader}>{"Origin: "} </Text>
            <View style={styles.characteDetailContent}>
              <Text style={styles.characterInformationText}>
                {" "}
                {character.origin.name}
              </Text>
            </View>
          </View>

          <View style={styles.characterDetailContainerTruncated}>
            <Text style={styles.characterDetailHeader}>
              {"Actual Location: "}{" "}
            </Text>
            <View>
              <Text style={styles.characterInformationText}>
                {" "}
                {character.location.name}
              </Text>
            </View>
          </View>
          {favouriteCharactersId.includes(character.id) ? (
            <>
              <View style={styles.characterDetailContainerTruncated}>
              <Text style={styles.characterDetailHeader}>
                  {"Comment: "}{" "}
                </Text>
                <View style={styles.textFilterContainer}>
                  <TextInput
                    style={styles.filterTextInput}
                    placeholder={character.comment}
                    placeholderTextColor="gray"
                    value={comment}
                    onChangeText={setComment}
                    onSubmitEditing={() => commentHandler()}
                  />
                </View>
              </View>
            </>
          ) : (null)}
        </ScrollView>
      </View>
    </>
  );
}
