

import React, { useEffect, useState } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";
import io from "socket.io-client";

const socket = io("http://YOUR_IP:5000");

export default function ChatScreen() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, { text: data }]);
    });

    socket.on("show_typing", (username) => {
      setTypingStatus(`${username} is typing...`);
    });

    socket.on("hide_typing", () => {
      setTypingStatus("");
    });

    return () => socket.disconnect();
  }, []);

  const sendMessage = () => {
    socket.emit("send_message", message);
    setMessages((prev) => [...prev, { text: message }]);
    setMessage("");
    socket.emit("stop_typing");
  };

  const handleTyping = (text) => {
    setMessage(text);
    if (text.length > 0) {
      socket.emit("typing", "Friend");
    } else {
      socket.emit("stop_typing");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text style={{ marginVertical: 5 }}>{item.text}</Text>}
      />
      {typingStatus ? <Text style={{ fontStyle: "italic" }}>{typingStatus}</Text> : null}
      <TextInput
        value={message}
        onChangeText={handleTyping}
        placeholder="Type message"
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
}
