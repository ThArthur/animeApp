import React from "react";
import { 
    Image,
    StyleSheet,
    Text,
    View
} from "react-native";

export default function ProfileHeader(){
    return(
        <View style={styles.container}>
            <Image 
                style={styles.profileImage}
                source={{uri: 'https://staticg.sportskeeda.com/editor/2023/02/bceba-16765358999741-1920.jpg'}}
            />
            <View style={styles.viewNickHeader}>
                <Text style={styles.fontWelcome}>
                    Bem vindo
                </Text>
                <Text style={styles.fontNick}>
                    Rokku
                </Text>
            </View>

            <View>
                <Text>
                    menu
                </Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 65
    },
    profileImage:{
        width: 50,
        height: 50,
        borderRadius: 50/2
    },
    viewNickHeader:{
        display: 'flex',
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "flex-start"
    },
    fontWelcome: {
        
    },
    fontNick: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#000000'
    }
})