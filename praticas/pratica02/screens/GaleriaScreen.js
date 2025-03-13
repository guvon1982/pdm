import { View, Text, StyleSheet } from "react-native";

function GaleriaScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.photo}>
        <Text>Foto 1</Text>
      </View>
      <View style={styles.photo}>
        <Text>Foto 2</Text>
      </View>
      <View style={styles.photo}>
        <Text>Foto 3</Text>
      </View>
      <View style={styles.photo}>
        <Text>Foto 4</Text>
      </View>
      <View style={styles.photo}>
        <Text>Foto 5</Text>
      </View>
      <View style={styles.photo}>
        <Text>Foto 6</Text>
      </View>
      <View style={styles.photo}>
        <Text>Foto 7</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 100,
    width: 100,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GaleriaScreen;