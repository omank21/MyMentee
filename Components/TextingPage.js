import React from "react";
import { StyleSheet } from "react-native";
import { useState, useCallback, useEffect } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GiftedChat, Bubble } from "react-native-gifted-chat";

const Stack = createNativeStackNavigator();

function TextingPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Thats fine I have scribbled you in for our usual time. See you then.",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Daniel",
          avatar: "https://i.pravatar.cc/150?img=8",
        },
      },
      {
        _id: 2,
        text: "I should be free the coming Monday.",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "Tahmid",
          avatar: "https://i.pravatar.cc/300",
        },
      },
      {
        _id: 3,
        text: "When are you next available for a meeting since I need to run through a new assignment with you?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Daniel",
          avatar: "https://i.pravatar.cc/150?img=8",
        },
      },
      {
        _id: 4,
        text: "I am good thank you.",
        createdAt: new Date(),
        user: {
          _id: 1,
          avatar: "https://i.pravatar.cc/300",
        },
      },
      {
        _id: 5,
        text: "Hi how are you?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Daniel",
          avatar: "https://i.pravatar.cc/150?img=8",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  randomMethod = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: "white",
            padding: 1,
          },
          right: {
            backgroundColor: "#add8e6",
          },
        }}
        textStyle={{
          right: {
            color: "black",
          },
          left: {
            color: "black",
          },
        }}
        timeTextStyle={{
          right: {
            color: "black",
          },
          left: {
            color: "black",
          },
        }}
      />
    );
  };

  return (
    <GiftedChat
      messages={messages}
      renderBubble={this.randomMethod.bind(this)}
      showAvatarForEveryMessage={true}
      showUserAvatar={true}
      renderUsernameOnMessage={true}
      isTyping={true}
      onSend={(messages) => onSend(messages)}
      alwaysShowSend={true}
      renderAvatarOnTop={true}
      user={{
        _id: 1,
        avatar: "https://i.pravatar.cc/300",
        name: "Tahmid",
      }}
    />
  );
}

const style = StyleSheet.create({
  input1: {
    height: 50,
    paddingVertical: 0,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  input2: {
    position: "relative",
    paddingVertical: 0,
    borderRadius: 23,
    borderWidth: 1,
    height: 60,
    paddingLeft: 10,
  },
  box1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default TextingPage;
