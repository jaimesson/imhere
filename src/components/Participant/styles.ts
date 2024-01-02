import { StyleSheet } from "react-native";

export const StylesParticipant = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    color: "#FDFCFE",
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
  },
  buttonText: {
    color: "#FDFCFE",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#E23C24",
    alignItems: "center",
    justifyContent: "center",
  },
});
