import { StyleSheet, Text, View } from "react-native";
import TagsContainer from "../tags_container";
import { TagType, TagsEnum } from "../tags_container/types";

export enum EmotionalStatusEnum {
    HAPPY = 'happy',
    SAD = 'sad',
}

type EmotionStatus = typeof EmotionalStatusEnum[keyof typeof EmotionalStatusEnum]

interface Props {
    text: string,
    createdAt: string,
    emotionalStatus: EmotionStatus,
    tags: Tag[]
}

const InstantResume:React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.left}>
                    <Text style={styles.text}>{props.createdAt}</Text>
                    <Text style={styles.text}>{props.text}</Text>
                </View>
                <View style={styles.right}>
                    <View style={styles.emotionalStatus}></View>
                </View>
                
            </View>
            <View style={styles.tagsbox}>
                <TagsContainer tags={props.tags}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        alignItems: 'center',
        flexDirection: 'row',
  
    },
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#FFDCDC',
        borderColor: '#DFDFDF',
        borderWidth: 3,
        borderRadius: 20,
        margin: 20,
        width: "90%",
    },
    left: {
        flex: 1,
    },
    right: {
        alignItems: 'center',
        width: "30%",
        backgroundColor: '#ffff'
    },
    tagsbox: {
        width: "90%",
        marginBottom: 20,
        backgroundColor: '#CFFFCD',
        borderColor: "#CDCDCD",
        borderWidth: 3,
        borderRadius: 20,
        display: 'flex',
        
    },
    text: {
        fontSize: 16,
        margin: 20,

    },
    hour: {
        fontSize: 14,
    },
    emotionalStatus: {
        width: 80,
        height: 80,
        backgroundColor: "#F95B5B"
    }
})

export default InstantResume;