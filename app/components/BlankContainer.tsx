import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function BlankContainer({ children }: Props) {
  return <View style={style.container}>{children}</View>;
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    marginTop: 10,
    minWidth: 250,
    maxWidth: 250,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
  },
});
