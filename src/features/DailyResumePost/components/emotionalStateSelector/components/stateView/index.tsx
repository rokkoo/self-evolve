import { Image, StyleSheet, View } from "react-native"
import AppText from "../../../../../../component/AppText"
import { FontSize } from "../../../../../../constants/metrics"
import { TagType } from "../../../../../../states/zustand/types"

interface Props {
    text: string,
    tag: TagType,
}

const StateView: React.FC<Props>= ({ text, }) => {
    return (
        <View style={styles.statusContainer}>
            <Image 
                style={styles.emotionalStatus} 
                source={require(`../../../../../assets/icons/emotions/happy.png`)}
                resizeMode="contain"
                />
            <AppText
                children={text}
                fontSize={FontSize.l} />
        </View>
    )
}

const styles = StyleSheet.create({
    emotionalStatus: {
        width: 60,
        height: 60,
    },
    statusContainer: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
    }
})

export default StateView;