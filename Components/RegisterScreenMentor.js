import { ImageBackground, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../firebase'



const RegisterScreenMentor = ({navigation}) => {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[Fname, setFname] = useState('')
    const[Sname, setSname] = useState('')

    const Register = ()=>{

        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          user.updateProfile({
              displayName: Fname,Sname
          })
        })
        .catch((error) => {
          
          var errorMessage = error.message;
          alert(errorMessage)
        });
        
    } //dsds
    return (
        <KeyboardAvoidingView
            style={styles.container}
            
        > 
        
            <Image source={require('./assets/logo-black.png')}
            style={{marginTop: -200, marginBottom: -50, transform:[{scale: 0.3}]}} />
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Please Register:</Text>
                <TextInput
                    placeholder="First Name"
                    value={Fname}
                    onChangeText={text => setFname(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Surname"
                    value={Sname}
                    onChangeText={text => setSname(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />

                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={Register}
                    style={styles.button}
                >
                <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>navigation.navigate("Login")}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Return</Text>
                </TouchableOpacity>
            </View>
            <Image source={require('./assets/fdm-logo-black.png')}
                style={{marginTop: 50, marginBottom: -170, transform:[{scale: 0.2}]}} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreenMentor

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