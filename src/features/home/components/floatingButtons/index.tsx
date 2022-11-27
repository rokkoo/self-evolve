import { useCallback } from "react";
import { Image, StyleSheet, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import constants from "../../../../constants"
import useAppNavigation from "../../../../navigation/hooks/useAppNavigation";
import { FlowEnum } from "../../../../navigation/types";
import { PostTypeEnum } from "../../../../states/zustand/types";


const FloatingButtons = () => {
    const { navigation } = useAppNavigation();

    const handlePress = useCallback(() => {
      navigation.navigate(FlowEnum.DailyResumePost, {
        type: PostTypeEnum.RESUME,
      });
    }, []);
  
    const handleInstaPress = useCallback(() => {
      navigation.navigate(FlowEnum.DailyResumePost, {
        type: PostTypeEnum.INSTAN,
      });
    }, []);
  

    return(
        <View>
            <View style={styles.dailyButton}>
                <TouchableOpacity onPress={handlePress}>
                    <Image style={styles.icon} source={require("../../../../../assets/icons/star_large.png")}/>
                </TouchableOpacity>
            </View>
            <View style={styles.instantButton}>
                <TouchableOpacity onPress={handleInstaPress}>
                    <Image style={styles.icon} source={require("../../../../../assets/icons/triangle_large.png")}/>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    instantButton: {
        width: 60,  
        height: 60,   
        borderRadius: 30,            
        backgroundColor: constants.LightTheme.terciary,                                    
        position: 'absolute',                                          
        bottom: 20,                                                    
        right: 20, 
        alignItems: 'center',
        justifyContent: 'center',

    },
    dailyButton: {
        width: 60,  
        height: 60,   
        borderRadius: 30,            
        backgroundColor: constants.LightTheme.terciary,                                    
        position: 'absolute',                                          
        bottom: 90,                                                    
        right: 20, 
        alignItems: 'center',
        justifyContent: 'center',

    },
    icon: {
        width: 30,
        height: 30,
    }
})

export default FloatingButtons;