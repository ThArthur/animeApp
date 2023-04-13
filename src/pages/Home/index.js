import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import ProfileHeader from "../../components/ProfileHeader";

export default function Home(){
    return(
        <View style={styles.container}>
            <ProfileHeader/>
            <TextInput 
                style={styles.searchBar}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fffa',
        paddingHorizontal: 20
    },
    searchBar: {
        backgroundColor: '#d3d3d3',
        height: 45,
        borderRadius: 45/2
    }
})