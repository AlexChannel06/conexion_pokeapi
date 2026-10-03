import { Text, View, StyleSheet } from 'react-native';
import { useContext } from "react";
import { DragonContext } from "@/context/dragoncontext";
import LookBar from '@/components/searchbar';
import DragonViewer from '@/components/dragonimage';

export default function DragonScreen() {
  const { character, loading, found, scout } = useContext(DragonContext);

  return (
    <View style={styles.container}>
      <LookBar onPress={scout} />

      {loading && <Text style={styles.text}>Cargando...</Text>}

      {!loading && found && character && (
        <>
          <Text style={styles.title}>{character.name}</Text>
          <DragonViewer />
        </>
      )}

      {!loading && !found && (
        <Text style={styles.title}>Ese personaje no existe</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});