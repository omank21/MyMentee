import { Button } from "react-native-web";
import { ImageBackground, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../firebase'

const SettingsPage = ({navigation}) => {
    const signOut = () => {
        auth.signOut().then(() => {

            navigation.replace("Login");

          }).catch((error) => {
            
          });
    }
    

    return(

        <View style={styles.buttonContainer}>
            <Text>This is settings</Text>

                <TouchableOpacity
                    onPress={signOut}
                    style={styles.button}
                >
                <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            
        </View>
    )

    
}
export default SettingsPage;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        textAlign: 'center',
        opacity:0.7,
        color:'black',
        marginBottom: 20,
    },

    inputContainer: {
        width:'80%'
    },
    input: {
        borderColor:'#1DADED',
        borderWidth: 0.7,
        paddingHorizontal:15,
        paddingVertical: 10,
        borderRadius:5,
        marginTop: 10,
    },
    buttonContainer: {
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    },
    button: {
        backgroundColor:'#1DADED',
        width:'100%',
        padding:15,
        borderRadius:10,
        borderColor:'white',
        borderWidth: 1,
        alignItems:'center',
    },  
    buttonOutline: {
        backgroundColor:'transparent',
        marginTop:20,
        borderColor:'#1DADED',
        borderWidth: 1,
    },
    buttonText:{
        color:'white',
        fontWeight: '700',
        fontSize:15,
    },
    buttonOutlineText: {
        color:'#1DADED',
        fontWeight: '700',
        fontSize:15,
    },

})