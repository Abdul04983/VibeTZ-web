import React, { useEffect, useState } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";
import socket from "../utils/socket"; // adjust path as needed
import { useRoute } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext"; // make sure context ipo

const ChatScreen = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const route = useRoute();
  const { receiverId } = route.params; // From navigation params
  const { user } = useAuth(); // Your logged in user

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
      socket.emit("join", user._id);
    }

    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMsg = {
      senderId: user._id,
      receiverId,
      content: message,
      timestamp: new Date(),
    };

    socket.emit("sendMessage", newMsg);
    setMessages((prev) => [...prev, newMsg]);
    setMessage("");
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={messages}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <Text style={{
            alignSelf: item.senderId === user._id ? "flex-end" : "flex-start",
            backgroundColor: item.senderId === user._id ? "#DCF8C6" : "#EEE",
            padding: 8,
            marginVertical: 2,
            borderRadius: 5
          }}>
            {item.content}
          </Text>
        )}
      />
      <TextInput
        placeholder="Andika ujumbe..."
        value={message}
        onChangeText={setMessage}
        style={{ borderWidth: 1, borderColor: "#ccc", padding: 8, marginBottom: 5 }}
      />
      <Button title="Tuma" onPress={handleSend} />
    </View>
  );
};

export default ChatScreen;


