import React from 'react'; // we need this to make JSX compile
import { Image, StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Self</Text>
            <Text style={styles.header}>Evolve</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        paddingVertical: 30,
        paddingTop: 70,
        flex:1,
    },
    header: {
        fontSize: 62,
        margin: 10,
    },
  
  });

export default Header;