import { View, Text } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: `Details: ${id}` }} />
      <Text>Product Detail for id: {id}</Text>
    </View>
  );
}
