import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TagType } from "../tags_container/types";

interface Props {
    type: TagType,
}

const Tag:React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.type}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        marginHorizontal: 10,
        paddingHorizontal: 5,
        paddingVertical: 3,
        marginVertical: 5,
    
    }
})

export default Tag;