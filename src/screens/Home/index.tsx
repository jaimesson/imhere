import {
  Alert,
  FlatList,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { StylesHome } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  function handleParticipantAdd() {
    const processedValue = inputValue.toLowerCase();
    if (participants.includes(processedValue)) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante na lista com esse nome."
      );
    }
    setParticipants((prevState) => [...prevState, processedValue]);
    setInputValue("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) => [
            ...prevState.filter((participant) => participant !== name),
          ]),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={StylesHome.container}>
      <Text style={StylesHome.eventName}>Nome do evento</Text>
      <Text style={StylesHome.eventDate}>Sexta, 4 de Novembro de 2024</Text>
      <View style={StylesHome.form}>
        <TextInput
          style={StylesHome.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          value={inputValue}
          autoCapitalize="none"
          onChangeText={setInputValue}
        />
        <Pressable style={StylesHome.button} onPress={handleParticipantAdd}>
          <Text style={StylesHome.buttonText}>+</Text>
        </Pressable>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={StylesHome.emptyListText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
