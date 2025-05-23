import { Text, TextInput } from "react-native";
import { styles } from "./textbox.style";

function TextBox(props) {
  return (
    <>
      {props.label && <Text style={styles.label}>{props.label}</Text>}

      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.isPassword}
        onChangeText={(texto) => props.onChangeText(texto)}
        value={props.value}
        returnKeyType={props.returnKeyType ? props.returnKeyType : "default"}
        autoCapitalize={props.autoCapitalize || "sentences"} // Adicionado para suportar autoCapitalize
        onSubmitEditing={(value) =>
          props.onSubmit && props.onSubmit(value.nativeEvent.text)
        }
      />
    </>
  );
}

export default TextBox;
