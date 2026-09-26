import { Text, View, StyleSheet } from 'react-native';
import { useContext } from "react";
import { PokeContext } from "@/context/pokecontext";
import LookBar from '@/components/searchbar';
import Stats from '@/components/stats';


export default function Data() {
    const { pokemon, loading, found } = useContext(PokeContext);
    return (
        <View style={styles.container}>
            <LookBar />

            {loading && <Text style={styles.text}>Cargando...</Text>}

            {!loading && !found && (
                    <>
                      <Text style={styles.title}>Ese pokemon no existe </Text>
                    </>
            )}

            {pokemon && (
                <>
                    <Text style={styles.title}>Informacion de: {pokemon.nombre}</Text>
                    <Stats />

                </>
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
    color: '#fff',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});
