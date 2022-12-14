import { PixelRatio, StyleSheet } from "react-native";

const AVATAR_SIZE = 150;
const SPACING = 20;

export default styles = StyleSheet.create({
  SAVcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  navigationContainer: {
    backgroundColor: "black",
  },

  flatlistStyle: {
    backgroundColor: "#555555",
    width: "100%",
    flex: 1,
  },

  characterRenderWrapper: {
    alignSelf: "center",
    flexDirection: "row",
    marginTop: SPACING,
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: 12,
    height: PixelRatio.getPixelSizeForLayoutSize(60),
    width: "100%",
  },

  image: {
    borderRadius: AVATAR_SIZE,
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: SPACING / 2,
    marginRight: SPACING / 2,
  },

  nameContainer: {
    marginRight: "5%",
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "lightyellow",
    width: "50%",
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
  },

  detailedText: {
    fontSize: 16,
    marginTop: 3,
    marginLeft: 10,
    opacity: 0.5,
  },

  detailsContainer: {
    height: 30,
  },

  veryDetailedContainer: {
    height: undefined,
    marginBottom: 10,
  },

  modalTopBarContainer: {
    flexDirection: "row",
    marginTop: 10,
  },

  topLeftIcon: {
    flex: 1,
  },

  starContainer: {
    position: "absolute",
    marginTop: "2%",
    marginLeft: "90%",
  },

  star: {
    height: 25,
    width: 25,
  },

  modalSeparator: {
    alignSelf: "center",
    width: "95%",
    height: 1.5,
    backgroundColor: "grey",
    marginBottom: "2%",
  },

  historyContainer:{
    marginTop: 10,
    height: 50,
    // width: "100%", 
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: 12,
    padding: 5,
    // flexWrap: "wrap",

  },

  historyText: {
    paddingLeft: 10,
    // textAlign: "center",
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    flexWrap: "wrap",
  },


  // image: {
  //   borderRadius: AVATAR_SIZE,
  //   height: AVATAR_SIZE,
  //   width: AVATAR_SIZE,
  //   alignSelf: 'center',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginLeft: SPACING/2,
  //   marginRight: SPACING/2,
  // },
});
