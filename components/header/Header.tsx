import React from 'react'; // we need this to make JSX compile
import { Image, StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View>
            <Text style={styles.header}>Self Evolve</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 62,
        margin: 10,
    },
  
  });

export default Header;