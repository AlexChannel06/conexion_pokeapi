import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function buscador() {
  const [nombre, setNombre] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState('');

  const buscar = async () => {
    if (!nombre.trim()) return;
    try {
      setError('');
      const respuesta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nombre.trim().toLowerCase()}`
      );
      const datos = await respuesta.json();

      setPokemon({
        name: datos.name,
        imagen: datos.sprites.front_default,
        peso: datos.weight,
        altura: datos.height,
        movimiento1: datos.moves[0].move.name,
        movimiento2: datos.moves[1].move.name,
      });
    } catch (e) {
      setPokemon(null);
      setError('No se encontró el Pokémon');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido</Text>
      <Text>Escribe el nombre de un Pokémon</Text>

      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="pikachu"
        autoCapitalize="none"
      />

      <Button title="Buscar" onPress={buscar} />

      {error !== '' && <Text style={styles.error}>{error}</Text>}

      {pokemon && (
        <View style={styles.resultado}>
          <Image source={{ uri: pokemon.imagen }} style={styles.imagen} />
          <Text style={styles.nombre}>{pokemon.nombre}</Text>
          <Text>Peso: {pokemon.peso}</Text>
          <Text>Altura: {pokemon.altura}</Text>
          <Text>Movimiento 1: {pokemon.movimiento1}</Text>
          <Text>Movimiento 2: {pokemon.movimiento2}</Text>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginVertical: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  resultado: {
    alignItems: 'center',
    marginTop: 20,
  },
  imagen: {
    width: 150,
    height: 150,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});