import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native"
import AppLayoutScrollView from "../../component/AppLayoutScrollView";
import useUserData from "../../states/zustand/hooks/useUserData";
import DailyContainer from "./components/daily_container";
import DailyResume from "./components/daily_resume";
import CardView, { EmotionalStatusEnum } from "./components/instant_resume";
import { TagsEnum } from "./components/tags_container/types";

const Home = () => {

    const { user } = useUserData();

    const saraut = useMemo(() => {
        if(user.name != "")
            return `¡Hola, ${user.name}!` 
        return '¡Hola!'
    }, [user])

    // var saraut = "¡Hola"
    // console.log("username:" + user.name)

    // if(user.name != ""){
    //     saraut = useMemo(() => {
    //         return `${saraut}, ${user.name}!` 
    //     }, [user])
    // }else{
    //     saraut = saraut + "!"
    // }

    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <Text>{saraut}</Text>
                <View style={styles.verticleLine}></View>
                <Text style={styles.year}>2022</Text>
            </View>
            <View style={styles.calendar}>

            </View>
            <View style={styles.bottom}>
                <View style={styles.daily}>
                    <DailyContainer/>
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