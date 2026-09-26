import { useState, useContext } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { PokeContext } from "@/context/pokecontext";

export default function LookBar() {
    const [nombre, setNombre] = useState('');
    const { search, loading } = useContext(PokeContext);

    const pokeDex = () => {
        if (nombre.trim() === '') return;
        search(nombre.toLowerCase());
    }

    return (
        <View style={styles.input}>
            <TextInput
                placeholder="Pokemon"
                value={nombre}
                onChangeText={setNombre}
                style={styles.bar}
            />
            <View style={styles.button}>
                <Button title={loading ? '...' : 'Buscar'} onPress={pokeDex} />
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
    button:{
        alignSelf: 'center',
        marginLeft: 'auto'
    }
});