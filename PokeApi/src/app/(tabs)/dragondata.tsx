import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { DragonContext } from "@/context/dragoncontext";

export default function DragonStats() {
    const { loading, character } = useContext(DragonContext);

    if (loading || !character) return null;

    const filas = [
        { label: 'Raza', valor: character.race },
        { label: 'Género', valor: character.gender },
        { label: 'Ki', valor: character.ki },
    ];

    return (
        <View style={styles.tabla}>
            {filas.map((fila, index) => (
                <View
                    key={fila.label}
                    style={[
                        styles.fila,
                        index % 2 === 0 && styles.filaAlterna,
                        index === filas.length - 1 && styles.ultimaFila,
                    ]}
                >
                    <Text style={styles.label}>{fila.label}</Text>
                    <Text style={styles.valor}>{fila.valor}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    tabla: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        overflow: 'hidden',
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    ultimaFila: {
        borderBottomWidth: 0,
    },
    filaAlterna: {
        backgroundColor: '#f7f7f7',
    },
    label: {
        fontSize: 15,
        fontWeight: '600',
        color: '#333',
    },
    valor: {
        fontSize: 15,
        color: '#111',
    },
});