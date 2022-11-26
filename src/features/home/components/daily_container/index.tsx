import { StyleSheet, View } from "react-native";
import AppLayoutScrollView from "../../../../component/AppLayoutScrollView";
import DailyResume from "../daily_resume";
import InstantResume, { EmotionalStatusEnum } from "../instant_resume";
import { TagsEnum } from "../tags_container/types";

const DailyContainer = () => {
    return (
        <View>
            <DailyResume />

                <InstantResume 
                    text="Me fui a jugar al futbol con mi primo y me pelee con el."
                    createdAt="10:04 AM"
                    emotionalStatus={EmotionalStatusEnum.HAPPY}
                    tags={[TagsEnum.DOSPORT, TagsEnum.TAKEANAP]}
                />

                <InstantResume 
                    text="He ido a comprar el pan."
                    createdAt="17:56 PM"
                    emotionalStatus={EmotionalStatusEnum.HAPPY}
                    tags={[TagsEnum.DOSPORT, TagsEnum.TAKEANAP, TagsEnum.TAKEANAP, TagsEnum.TAKEANAP, TagsEnum.TAKEANAP, TagsEnum.TAKEANAP, TagsEnum.TAKEANAP]}
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
        backgroundColor: "#F95B5B"
    }
})

export default DailyContainer;