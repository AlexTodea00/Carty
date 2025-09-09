import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CartIcon from "../../assets/icons/cart.svg";
import ThunderIcon from "../../assets/icons/thunder.svg";
import UsersIcon from "../../assets/icons/users.svg";
import BlankContainer from "../components/BlankContainer";
import { loginStyle } from "../styles/login/loginStyles";
import { lightBlue, lightGreen, lightPurple } from "../styles/variables";

export default function LoginPage() {
  const appFeatures = [
    { icon: UsersIcon, colour: lightBlue, text: "Invite friends & family" },
    { icon: ThunderIcon, colour: lightGreen, text: "Real-time collaboration" },
    { icon: CartIcon, colour: lightPurple, text: "Never forget items" },
  ];

  return (
    <SafeAreaView style={loginStyle.page}>
      <Text style={loginStyle.title}>Carty</Text>
      <Text style={loginStyle.subHeader}>
        Collaborative shopping lists for groups
      </Text>
      {appFeatures.map((feature) => {
        return (
          <BlankContainer key={feature.text}>
            <View
              style={{
                backgroundColor: feature.colour,
                padding: 8,
                borderRadius: 24,
              }}
            >
              <feature.icon />
            </View>
            <Text>{feature.text}</Text>
          </BlankContainer>
        );
      })}
    </SafeAreaView>
  );
}
