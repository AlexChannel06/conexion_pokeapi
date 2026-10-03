// components/Stats.tsx
import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { PokeContext } from "@/context/pokecontext";

const ETIQUETAS: Record<string, string> = {
    HP: 'HP',
    ATAQUE: 'Ataque',
    DEFENSA: 'Defensa',
    ESP_ATAQUE: 'Ataque esp.',
    ESP_DEFENSA: 'Defensa esp.',
    VELOCIDAD: 'Velocidad',
};

export default function Stats() {
    const { loading, pokemon, found } = useContext(PokeContext);

    if (loading) return null;

    if (!found) {
        return (
            <View style={styles.container}>
                <Text style={styles.texto}>Ese pokemon no existe (aún)</Text>
            </View>
        );
    }

    if (!pokemon) return null;

    return (
        <View style={styles.container}>
            <View style={styles.filaSuperior}>
                <View style={styles.columnaIzquierda}>
                    <Text style={styles.texto}>Nombre: {pokemon.NOMBRE}</Text>
                    <Text style={styles.texto}>Peso: {pokemon.PESO}</Text>
                </View>

                <View style={styles.columnaDerecha}>
                    {Object.entries(pokemon.STATS).map(([key, value]) => (
                        <Text key={key} style={styles.texto}>
                            {ETIQUETAS[key] ?? key}: {value}
                        </Text>
                    ))}
                </View>
            </View>

            <View style={styles.seccion}>
                <Text style={styles.label}>Tipos:</Text>
                {pokemon.TIPO.map((tipo) => (
                    <Text key={tipo} style={styles.texto}>{tipo}</Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
    },
    filaSuperior: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    columnaIzquierda: {
        flex: 1,
    },
    columnaDerecha: {
        flex: 1,
        alignItems: 'flex-start',
    },
    seccion: {
        marginTop: 20,
    },
    label: {
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 6,
    },
    texto: {
        fontSize: 15,
        marginBottom: 4,
    },
});