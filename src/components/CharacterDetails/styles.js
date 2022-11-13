import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    modalContainer: {
        marginTop: '14%',
        borderRadius: 15,
        backgroundColor: '#555555',
        blurRadius: 90,
        flexShrink: 1,
    },

    characterDetailHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'darkgrey',
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
        alignSelf: 'center',
    },
    
    deadStatus: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'red',
        alignSelf: 'center',
    }, 

    characterDetailContainer:{
        flexDirection: 'row',
        marginLeft: '5%',
        marginBottom: '3%',
        flexWrap: 'wrap'
    },
  
    characterDetailContainerTruncated: {
        marginLeft: '5%',
        marginBottom: '3%',
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

    closeButtonContainer: {
        position: 'absolute',
        alignSelf: 'flex-end',
        alignItems: 'center',
        marginTop: '4%',
        marginRight: '10%',
        flexShrink: 1,
    },
    
    closeButton: {
        width:40,
        height: 40,
    },

    modalImage: {
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        resizeMode: 'contain',
        aspectRatio: 1,
        height: undefined,
        width: undefined,
    },

    detailedName: {
        fontSize: 36,
        fontWeight: 'bold',
        margin: 10,
        color: 'white',
        marginTop: 10,
    },
});