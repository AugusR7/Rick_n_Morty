import { StyleSheet, PixelRatio } from "react-native";

export default styles = StyleSheet.create({
  modalContainer: {
    marginTop: "13%",
    borderRadius: 15,
    backgroundColor: "#555555",
    width: "80%",
    height: "88%",
    alignSelf: "center",
    blurRadius: 90,
  },

  characterDetailIcon: {
    resizeMode: "contain",
    aspectRatio: 0.7,
    height: undefined,
    width: undefined,
  },

  aliveStatus: {
    fontSize: 23,
    fontWeight: "bold",
    color: "lightgreen",
    alignSelf: "center",
  },

  deadStatus: {
    fontSize: 23,
    fontWeight: "bold",
    color: "red",
    alignSelf: "center",
  },

  filterContainer: {
    marginLeft: "5%",
    marginBottom: "3%",
  },

  characterDetailContainerTruncated: {
    marginLeft: "5%",
    marginBottom: "3%",
  },

  buttonFilterContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  buttonFilterContainerSecondRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    // marginTop: 20,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(4),
  },

  textFilterContainer: {
    width: "95%",
    // height: 35,
    height: PixelRatio.getPixelSizeForLayoutSize(13),
  },

  modalSeparator: {
    alignSelf: "center",
    width: "95%",
    height: 1.5,
    backgroundColor: "grey",
    marginBottom: "2%",
  },

  characterInformationText: {
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
  },

  characteDetailContent: {
    flexDirection: "row",
  },

  bottomButtonsContainer: {
    marginTop: 5,
    flexDirection: "row",
  },

  closeButtonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",
  },
  acceptButtonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",
  },

  closeButton: {
    marginLeft: 2,
    width: 45,
    height: 45,
  },

  applyButton: {
    marginLeft: 3,
    width: 40,
    height: 40,
  },

  buttonLegend: {
    color: "white",
    fontSize: 16,
  },

  modalImage: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    resizeMode: "contain",
    aspectRatio: 1,
    height: undefined,
    width: undefined,
  },

  introductionText: {
    textAlign: "center",
    // fontSize: 30,
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10.5),
    fontWeight: "bold",
    color: "white",
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(5),
  },

  filterHeader: {
    // fontSize: 24,
    fontSize: PixelRatio.getPixelSizeForLayoutSize(9.5),
    fontWeight: "bold",
    color: "darkgrey",
    // marginBottom: 10,
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(2),
  },

  itemContainer: {
    paddingLeft: 7,
    paddingRight: 7,
    // height: 30,
    height: PixelRatio.getPixelSizeForLayoutSize(10),
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "white",
    borderColor: "#555555",
    borderWidth: 2,
  },
  itemContainerSelected: {
    paddingLeft: 7,
    paddingRight: 7,
    // height: 30,
    height: PixelRatio.getPixelSizeForLayoutSize(10),
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "lightblue",
    borderColor: "lightblue",
    borderWidth: 2,
  },

  detailedFilterItem: {
    textAlign: "center",
    fontWeight: "bold",
    // fontSize: 18,
    fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
  },

  filterTextInput: {
    height: "100%",
    backgroundColor: "red",
    borderRadius: 5,
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
    // fontSize: 25,
    fontSize: PixelRatio.getPixelSizeForLayoutSize(9),
    fontWeight: "bold",
  },
});
