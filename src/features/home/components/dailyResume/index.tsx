import { Image, StyleSheet, Text, View } from "react-native";
import { useMemo } from 'react'
import constants from "../../../../constants";
import { EmotionalStatusEnum, EmotionStatus } from "../../types";

interface Props {
    emotionalStatus: EmotionStatus
}

const DailyResume:React.FC<Props> = ({emotionalStatus}) => {
    const iconSource = useMemo(() => {
    let emotionSourceName:EmotionStatus = EmotionalStatusEnum.HAPPY
    if(emotionalStatus === EmotionalStatusEnum.HAPPY){
        return require(`../../../../../assets/icons/emotions/happy.png`)
    }
    
    if(emotionalStatus === EmotionalStatusEnum.SAD){
        return require(`../../../../../assets/icons/emotions/sad.png`)
    }
    
    if(emotionalStatus === EmotionalStatusEnum.NEUTRAL){
        return require(`../../../../../assets/icons/emotions/neutral.png`)
    }

        return undefined
    }, [emotionalStatus])

    return (
        <View style={styles.container}>
            <Text style={styles.text}> ESTE DÍA ESTABAS: </Text>
            <Image 
                style={styles.emotionalStatus} 
                source={iconSource}
                resizeMode="contain"
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    text: {
        fontSize: 20,
    },
    emotionalStatus: {
        width: 80,
        height: 80,
        
    }
})

export default DailyResume;