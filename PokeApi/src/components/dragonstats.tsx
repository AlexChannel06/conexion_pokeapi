import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { DragonContext } from "@/context/dragoncontext";

export default function DragonStats() {
    const { loading, character } = useContext(DragonContext);

    return (
        <View style={styles.container}>
            {!loading && character && (
                <View style={styles.seccion}>
                    <Text style={styles.texto}>Raza: {character.race}</Text>
                    <Text style={styles.texto}>Género: {character.gender}</Text>
                    <Text style={styles.texto}>Ki: {character.ki}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
    },
    seccion: {
        alignItems: 'flex-start',
    },
    texto: {
        fontSize: 15,
        marginBottom: 4,
    },
});