import { useState, useContext } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { PokeContext } from "@/context/pokecontext";
import { DragonContext } from "@/context/dragoncontext";

type Props = {
    onPress?: (nombre: string) => void;
}

export default function LookBar({ onPress }: Props) {
    const [nombre, setNombre] = useState('');

    const { loading: pokeLoading } = useContext(PokeContext);
    const { loading: dragonLoading } = useContext(DragonContext);

    const isLoading = pokeLoading || dragonLoading;

    const handlePress = () => {
        const query = nombre.trim().toLowerCase();
        if (query === '') return;

        onPress?.(query);
    }

    return (
        <View style={styles.input}>
            <TextInput
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
                style={styles.bar}
            />
            <View style={styles.button}>
                <Button
                    title={isLoading ? '...' : 'Buscar'}
                    onPress={handlePress}
                    disabled={isLoading}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 220,
        marginBottom: 10,
    },
    bar: {
        backgroundColor: "#ffffff",
        color: "#000000",
        marginBottom: 8,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#999',
        flexDirection: 'row',
        width: '80%',
        paddingLeft: '2%',
        paddingRight: '2%'
    },
    button: {
        alignSelf: 'center',
        marginLeft: 'auto'
    }
});