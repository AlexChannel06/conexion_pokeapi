import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useContext } from "react";
import { PokeContext } from "@/context/pokecontext";


export default function SpriteViewer(){
    const { pokemon } = useContext(PokeContext)
    return (
        <View style={styles.galeria}>
            <Image source={pokemon?.sprites.sprite1} style={styles.imagenPrincipal} />

            <View style={styles.filaSecundarias}>
                <Image source={pokemon?.sprites.sprite2} style={styles.imagenSecundaria} />
                <Image source={pokemon?.sprites.sprite3} style={styles.imagenSecundaria} />
            </View>
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
    },
    filaSecundarias: {
        flexDirection: 'row',
        gap: 70,
    },
    imagenSecundaria: {
        width: 90,
        height: 90,
        borderRadius: 12,
    },
});