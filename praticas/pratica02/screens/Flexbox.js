import { View } from "react-native";

function Flexbox() {
  return (
    <View style={{ flex: 1, flexDirection: "row", backgroundColor: "blue" }}>
      <View
        style={{
          flex: 5,
          //justifyContent (alinhamento vertical):
          // flex-top = flex-start (topo)
          //justifyContent: "space-between"
          //justifyContent: "space-around"
          justifyContent: "space-evenly", 
          
          //alignItems (alinhamento horizontal)
          //alignItems: "center"
          //alignItems: "flex-start"
          //alignItems: "flex-end"
          alignItems: "stretch",
          backgroundColor: "red",
        }}
      >
        <View
          style={{ height: 50, width: 50, backgroundColor: "black" }}
        ></View>
        <View
          style={{ height: 50, width: 50, backgroundColor: "yellow" }}
        ></View>
        <View
          style={{ height: 50, width: 50, backgroundColor: "purple" }}
        ></View>
      </View>

      <View style={{ flex: 9, backgroundColor: "green" }}></View>
    </View>
  );
}

export default Flexbox;