import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { ThemeContext } from "../context/themeContext";

export default function PostCard({ username, content, imageUri, time }) {
  const { textColor } = useContext(ThemeContext);

  return (
    <View style={{
      backgroundColor: "#1a1a1a",
      margin: 10,
      borderRadius: 16,
      padding: 12,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 6,
    }}>
      <Text style={{ color: textColor, fontWeight: "bold", fontSize: 16 }}>
        @{username}
      </Text>
      <Text style={{ color: textColor, marginVertical: 8 }}>
        {content}
      </Text>
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={{ width: "100%", height: 200, borderRadius: 12 }}
        />
      )}
      <Text style={{ color: textColor, marginTop: 8, fontSize: 12 }}>
        {time}
      </Text>
    </View>
  );
}
