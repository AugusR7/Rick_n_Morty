import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, SafeAreaView, TouchableHighlight } from 'react-native';



export default function headerBar() {
    return (
        <View style = {styles.header}>

            <View style={styles.leftIcon}>
                
            </View>
            <View style={styles.centerElement}>
                <Image style={styles.logo} source={require('../Rick_and_Morty_logo.png')} />
            </View>
            <View style={styles.rightIcon}>
                <TouchableHighlight onPress={() => { alert('You tapped the button!'); }} style={styles.touchableIcon}>
                    <Image style={styles.filterIcon} source={require('../filter_icon.png')}/>
                </TouchableHighlight>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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