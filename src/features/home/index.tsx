import { StyleSheet, Text, View } from "react-native"
import DailyResume from "./components/daily_resume";
import CardView, { EmotionalStatusEnum } from "./components/instant_resume";
import { TagsEnum } from "./components/tags_container/types";

const Home = () => {
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <Text>¡Hola!</Text>
                <View style={styles.verticleLine}></View>
                <Text style={styles.year}>2022</Text>
            </View>
            <View style={styles.calendar}>

            </View>
            <View style={styles.bottom}>
                <View style={styles.daily}>
                    
                    <DailyResume />

                    <CardView 
                        text="Me fui a jugar al futbol con mi primo y me pelee con el."
                        createdAt="10:04 AM"
                        emotionalStatus={EmotionalStatusEnum.HAPPY}
                        tags={[TagsEnum.DOSPORT, TagsEnum.TAKEANAP]}
                    />

                    <CardView 
                        text="He ido a comprar el pan."
                        createdAt="17:56 PM"
                        emotionalStatus={EmotionalStatusEnum.HAPPY}
                        tags={[TagsEnum.DOSPORT, TagsEnum.TAKEANAP, TagsEnum.TAKEANAP, TagsEnum.TAKEANAP, TagsEnum.TAKEANAP, TagsEnum.TAKEANAP, TagsEnum.TAKEANAP]}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#2596be"
    },
    top: {
        height:"10%",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    calendar: {
        height:"10%",
        fontSize: 16,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: "#49cc00"
    },
    bottom: {
        flex: 1,
        fontSize: 16,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: "#902dre"
    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#909090',
    },
    year: {
        fontSize: 34,
    },
    daily: {
        flexDirection: 'column',
        alignItems: 'center',
        
    }
})

export default Home;