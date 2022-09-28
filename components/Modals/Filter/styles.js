import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    modalContainer: {
        marginTop: '30%',
        borderRadius: 15,
        backgroundColor: '#555555',
        width: '80%',
        height: '78%', 
        alignSelf: 'center',
        blurRadius: 90,
    },

    characterDetailIcon:{
        resizeMode: 'contain',
        aspectRatio: 0.7,
        height: undefined,
        width: undefined,
    },
    aliveStatus: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'lightgreen',
        alignSelf: 'center'
    },
    
    deadStatus: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'red',
        alignSelf: 'center'
    }, 

    filterContainer:{
        marginLeft: '5%',
        marginBottom: '3%',
    },
  
    characterDetailContainerTruncated: {
        marginLeft: '5%',
        marginBottom: '3%',
    },

    buttonFilterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    buttonFilterContainerSecondRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },

    textFilterContainer: {
        width: '95%',
        height: 50,
    },

    modalSeparator: {
        alignSelf: 'center',
        width: '95%',
        height: 1.5,
        backgroundColor: 'grey',
        marginBottom: '2%',
    },

    characterInformationText: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white',
    },

    characteDetailContent: {
        flexDirection: 'row',
    },

    bottomButtonsContainer: {
        flex: 1,
        marginTop: 20,
        flexDirection: 'row',
        alignSelf:'flex-end',
        justifyContent: 'flex-end',
    },

    closeButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '5%'
    },
    acceptButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '5%'
    },
    
    closeButton: {
        marginLeft: 2,
        width:45,
        height: 45,
    },

    applyButton: {
        marginLeft:3,
        width:40,
        height: 40,
    },

    buttonLegend: {
        color: 'white',
        fontSize: 16,
    },

    modalImage: {
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        resizeMode: 'contain',
        aspectRatio: 1,
        height: undefined,
        width: undefined,
    },

    introductionText: {
        fontSize: 34,
        fontWeight: 'bold',
        margin: 10,
        color: 'white',
        marginTop: 10,
    },

    filterHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'darkgrey',
        marginBottom: 10,
    },

    itemContainer: {
        paddingLeft: 7,
        paddingRight: 7,
        height: 30,
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: 'white',
        borderColor: '#555555',
        borderWidth: 2,
    },
    itemContainerSelected: {
        paddingLeft: 7,
        paddingRight: 7,
        height: 30,
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: 'lightblue',
        borderColor: 'lightblue',
        borderWidth: 2,
    },

    itemContainerSingle: {
        marginTop: 20,
        paddingLeft: 7,
        paddingRight: 7,
        width: 100,
        height: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 8,
    },

    detailedFilterItem: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },

    filterTextInput: {
        height: '100%',
        borderRadius: 5,
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
    
});