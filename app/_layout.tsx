import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        options={{ title: "Welcome", headerShown: false }}
        name="index"
      />
      <Stack.Screen
        options={{ title: "Welcome", headerShown: false }}
        name="login/LoginPage"
      />
    </Stack>
  );
}
