import { Animated } from "react-native";
import { Easing } from "react-native-reanimated";

export const shakeAnimation = (value, callback)=> {
    Animated.sequence([
        Animated.timing(value, {
            duration: 40,
            toValue: -50,
            useNativeDriver: true,
            ease: Easing.bounce
        }),
        Animated.timing(value, {
            duration: 80,
            toValue: 50,
            useNativeDriver: true,
            ease: Easing.bounce
        }),
        Animated.timing(value, {
            duration: 80,
            toValue: -50,
            useNativeDriver: true,
            ease: Easing.bounce
        }),
        Animated.timing(value, {
            duration: 40,
            toValue: -50,
            useNativeDriver: true,
            ease: Easing.bounce
        }),
        Animated.timing(value, {
            duration: 40,
            toValue: 0,
            useNativeDriver: true,
            ease: Easing.bounce
        }),
        Animated.timing(value, {
            duration: 40,
            toValue: 0,
            useNativeDriver: true,
            ease: Easing.bounce
        }),
    ]).start(callback)
}