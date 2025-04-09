import { useContext, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import {
  Appbar,
  List,
  TextInput,
  FAB,
  Modal,
  Button,
  Divider,
  Text,
} from "react-native-paper";
import { TaskContext } from "../contexts/TaskContext";


function TaskScreen() {
  const { tarefas, adicionar, selecionar, concluir, remover } =
    useContext(TaskContext);
  const [tarefa, setTarefa] = useState("");
  const [exibeModal, setExibeModal] = useState(false);
  const [exibeAlerta, setExibeAlerta] = useState(false);
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Minhas Tarefas" />
      </Appbar.Header>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <List.Item
              onLongPress={() => {
                selecionar(item.id);
                setExibeAlerta(true);
              }}
              onPress={() => concluir(item.id)}
              title={item.nome}
              right={(props) => (
                <List.Icon
                  {...props}
                  icon={
                    item.concluida ? "check-circle-outline" : "circle-outline"
                  }
                />
              )}
            />
            <Divider />
          </>
        )}
      />
      <FAB onPress={() => setExibeModal(true)} icon="plus" style={styles.fab} />
      <Modal visible={exibeModal}>
        <View style={styles.modal}>
          <TextInput
            label="Nova Tarefa"
            onChangeText={(text) => setTarefa(text)}
          />
          <Button
            onPress={() => {
              adicionar(tarefa);
              setTarefa("");
              setExibeModal(false);
            }}
          >
            Salvar
          </Button>
        </View>
      </Modal>
      <Modal visible={exibeAlerta}>
        <View style={styles.modal}>
          <Text variant="labelLarge">Deseja apagar a tarefa?</Text>
          <Button onPress={() => setExibeAlerta(false)}>Não</Button>
          <Button
            onPress={() => {
              remover();
              setExibeAlerta(false);
            }}
          >
            Sim
          </Button>
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
  modal: {
    backgroundColor: "white",
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
});


export default TaskScreen;