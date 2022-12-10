import { Animated } from "react-native";
import { Easing } from "react-native-reanimated";
import { ease } from "react-native/Libraries/Animated/Easing";

export const shakeAnimation = (value, callback)=> {
    Animated.sequence([
        Animated.timing(value, {
            duration: 50,
            toValue: -50,
            useNativeDriver: true,
            ease: Easing.bounce
        }),
        Animated.timing(value, {
            duration: 100,
            toValue: 50,
            useNativeDriver: true,
            ease: Easing.bounce
        }),
        Animated.timing(value, {
            duration: 50,
            toValue: 50,
            useNativeDriver: true,
            ease: Easing.bounce
        }),
        Animated.timing(value, {
            duration: 50,
            toValue: 0,
            useNativeDriver: true,
            ease: Easing.bounce
        }),
        Animated.timing(value, {
            duration: 100,
            toValue: 0,
            useNativeDriver: true,
            ease: Easing.bounce
        }),
    ]).start(callback)
}