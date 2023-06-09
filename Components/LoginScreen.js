import {
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIN = () => {
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      var errorMessage = error.message;
      alert(errorMessage);
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      if (user) {
        navigation.replace("MainScreen");
      } else {
        //No login
      }
    });
    return unsubscribe;
  });
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        source={require("./assets/logo-black.png")}
        style={{
          marginTop: -200,
          marginBottom: -50,
          transform: [{ scale: 0.3 }],
        }}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Please login:</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={signIN} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("RegisterMentee")}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register Mentee</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("RegisterMentor")}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register Mentor</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require("./assets/fdm-logo-black.png")}
        style={{
          marginTop: 50,
          marginBottom: -170,
          transform: [{ scale: 0.2 }],
        }}
      />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    textAlign: "center",
    opacity: 0.7,
    color: "black",
    marginBottom: 20,
  },

  inputContainer: {
    width: "80%",
  },
  input: {
    borderColor: "#1DADED",
    borderWidth: 0.7,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#1DADED",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "transparent",
    marginTop: 20,
    borderColor: "#1DADED",
    borderWidth: 1,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 15,
  },
  buttonOutlineText: {
    color: "#1DADED",
    fontWeight: "700",
    fontSize: 15,
  },
});
