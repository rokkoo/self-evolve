import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Tag from "../tag";
import { TagType } from "./types";


interface Props {
    tags: TagType[],
}

const TagsContainer:React.FC<Props> = (props) => {
    let itemList = props.tags.map((item,index)=>{
        return <Tag key={index} type={item}/>
    })

    return (
        <View style={styles.container}>
            {itemList}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    }
})

export default TagsContainer;