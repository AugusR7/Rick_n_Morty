import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import styles from "./styles";

export default function CharacterDetails({ character, closeHandler }) {
  return (
    <>
      <View style={styles.modalContainer}>
        <View style={styles.modalImageContainer}>
          <Image style={styles.modalImage} source={{ uri: character.image }} />
        </View>

        <View style={styles.closeButtonContainer}>
          <TouchableHighlight
            onPress={() => closeHandler()}
            style={styles.touchableIcon}
          >
            <Image
              style={styles.closeButton}
              source={require("../close_button_icon.png")}
            />
          </TouchableHighlight>
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
        </ScrollView>
      </View>
    </>
  );
}
