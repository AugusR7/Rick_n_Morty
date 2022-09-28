import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignSelf: 'top',
        backgroundColor: 'black',
        width: '100%',
        height: 80,
    },

    leftIcon: {
        flex:1,
        justifyContent: 'center',
    },
    
    centerElement: {
        flex:4,
        justifyContent: 'center',
        alignContent: 'center',
    },

    logo: {
        alignSelf: 'center',
        height: '70%',
        width: '70%',
    },

    rightIcon: {
       flex: 1,
       justifyContent: 'center',
    },
    
    filterIcon: {
        alignSelf: 'center',
        height: '80%',
        width: '60%',
        opacity: 0.5,
    },

    touchableIcon: {
        justifyContent: 'center'
    },
});