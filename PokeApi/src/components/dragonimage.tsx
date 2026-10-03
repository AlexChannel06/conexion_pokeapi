import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useContext } from "react";
import { DragonContext } from "@/context/dragoncontext";

export default function DragonViewer() {
    const { character } = useContext(DragonContext);

    return (
        <View style={styles.galeria}>
            <Image
                source={character?.image}
                style={styles.imagenPrincipal}
                contentFit="contain"
            />

            <Text style={styles.dato}>Género: {character?.gender}</Text>
            <Text style={styles.dato}>Raza: {character?.race}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    galeria: {
        alignItems: 'center',
        marginTop: 10,
    },
    imagenPrincipal: {
        width: 220,
        height: 220,
        marginBottom: 16,
        borderRadius: 18,
        backgroundColor: '#f2f2f2',
    },
    dato: {
        fontSize: 16,
        marginBottom: 4,
    },
});