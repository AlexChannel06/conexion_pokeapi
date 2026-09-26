import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { PokeContext } from "@/context/pokecontext";

export default function Stats() {
    const { loading, pokemon } = useContext(PokeContext);

    return (
        <View style={styles.container}>
            {!loading && pokemon && (
                <>
                    {/* Fila superior: básicos + stats en columnas */}
                    <View style={styles.filaSuperior}>
                        <View style={styles.columnaIzquierda}>
                            <Text style={styles.texto}>Altura: {pokemon.height}</Text>
                            <Text style={styles.texto}>Peso: {pokemon.weight}</Text>
                        </View>

                        <View style={styles.columnaDerecha}>
                            {pokemon?.stats.map((stat) => (
                                <Text key={stat.name} style={styles.texto}>
                                    {stat.name}: {stat.value}
                                </Text>
                            ))}
                        </View>
                    </View>

                    {/* Species */}
                    <View style={styles.seccion}>
                        {pokemon?.types.map((type) => (
                            <Text key={type} style={styles.texto}>{type}</Text>
                        ))}
                    </View>

                    {/* Moves (todos) */}
                    <View style={styles.seccion}>
                        <Text style={styles.label}>Moves:</Text>
                        {pokemon?.moves.map((move) => (
                            <Text key={move} style={styles.texto}>{move}</Text>
                        ))}
                    </View>
                </>
            )}
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