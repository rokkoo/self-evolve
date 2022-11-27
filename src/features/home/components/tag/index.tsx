import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "../../../../component/AppText";
import constants from "../../../../constants";
import { FontSize } from "../../../../constants/metrics";
import { TagType } from "../tagsContainer/types";

interface Props {
    type: TagType,
}

const Tag:React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <AppText fontSize={FontSize.s}>{props.type}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: constants.LightTheme.secondary,
        marginHorizontal: 5,
        paddingHorizontal:10,
        paddingVertical: 3,
        paddingRight: 20,
        marginVertical: 5,
        borderRadius: 5,
        borderColor: constants.LightTheme.secondaryBorder,
    },
})

export default Tag;