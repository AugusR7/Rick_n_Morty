import { View, Image, TouchableHighlight } from 'react-native';
import styles from './styles';

export default function headerBar({filterEnabler, closeHandler}) {
    return ( 
        <View style = {styles.header}>
            <View style={styles.leftIcon}/>

            <View style={styles.centerElement}>
                <Image style={styles.logo} source={require('./Rick_and_Morty_logo.png')} />
            </View>
            
            <View style={styles.rightIcon}>
                <TouchableHighlight onPress={ ()=> filterEnabler() } style={styles.touchableIcon}>
                    <Image style={styles.filterIcon} source={require('./filter_icon.png')}/>
                </TouchableHighlight>
            </View>
        </View>
    );
};
