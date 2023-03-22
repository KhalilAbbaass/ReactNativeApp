import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function Page() {
  console.log("Helloooo")
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello Khalil</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Button
        title="press me" style={styles.button} onPress={() => Alert.alert('high i am an alerttttt')}
      />
      </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color:'black'
  },
  subtitle: {
    fontSize: 36,
    color: "orange",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 1,
    elevation: 3,
  },
  
});
