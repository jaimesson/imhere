import { Pressable, Text, TouchableOpacity, View } from "react-native";

import { StylesParticipant } from "./styles";

type Props = {
  name: string,
  onRemove: () => void
}

export function Participant({ name, onRemove }: Props) {
  return (
    <View style={StylesParticipant.container}>
      <Text style={StylesParticipant.name}>{name}</Text>

      <Pressable style={StylesParticipant.button} onPress={onRemove}>
        <Text style={StylesParticipant.buttonText}>-</Text>
      </Pressable>
    </View>
  );
}
