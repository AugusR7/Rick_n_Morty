import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    modalContainer: {
        marginTop: '20%',
        borderRadius: 15,
        backgroundColor: '#555555',
        width: '80%',
        height: '83%', 
        alignSelf: 'center',
        blurRadius: 90,
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
        alignSelf: 'center'
    },
    
    deadStatus: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'red',
        alignSelf: 'center'
    }, 

    characterDetailContainer:{
        flexDirection: 'row',
        marginLeft: '5%',
        marginBottom: '3%',
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: '5%'
    },
    
    closeButton: {
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

    detailedName: {
        fontSize: 36,
        fontWeight: 'bold',
        margin: 10,
        color: 'white',
        marginTop: 10,
    },
});