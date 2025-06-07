import React, { useContext } from "react";
import { SafeAreaView, ScrollView, Button, View } from "react-native";
import { ThemeProvider, ThemeContext } from "./context/themeContext";
import PostCard from "./components/PostCard";

function Feed() {
  const { generateColor } = useContext(ThemeContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 10 }}>
        <Button title="Badilisha Rangi ya Maandishi" onPress={generateColor} />
      </View>
      <ScrollView>
        <PostCard
          username="jay_254"
          content="Weekend vibes in Zanzibar ???"
          imageUri="https://picsum.photos/500/300"
          time="2h ago"
        />
        <PostCard
          username="nana_artsy"
          content="New painting out now ?? tumia kiswaili"
          imageUri="https://picsum.photos/500/301"
          time="4h ago"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Feed />
    </ThemeProvider>
  );
}
