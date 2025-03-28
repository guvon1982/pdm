import { View, StyleSheet } from "react-native";
import { Text, TextInput, Button, IconButton, Icon } from "react-native-paper";

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={[styles.space_maior, styles.center]} variant="headlineLarge">
        Login
      </Text>
      <TextInput
        style={styles.space}
        mode="outlined"
        label="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        right={<TextInput.Icon icon="email" />}
      />
      <TextInput
        style={styles.space_maior}
        mode="outlined"
        label="Senha"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
      />
      <Button style={styles.space_maior} mode="contained-tonal">
        Entrar
      </Button>
      <Text style={styles.center} variant="labelMedium">
        Ou entre com:
      </Text>
      <View style={styles.buttons}>
        <IconButton icon="google" />
        <IconButton icon="facebook" />
        <IconButton icon="apple" />
        <IconButton icon="github" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  space: {
    marginBottom: 8,
  },
  space_maior: {
    marginBottom: 30,
  },
  center: {
    alignSelf: "center",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginScreen;
