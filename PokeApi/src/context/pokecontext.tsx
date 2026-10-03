import React, { createContext, useState, ReactNode } from 'react';

const API_URL = 'https://backpokesql-production.up.railway.app';

export type Pokemon = {
    NOMBRE: string;
    TIPO: string[];
    PESO: number;
    STATS: {
        HP: number;
        ATAQUE: number;
        DEFENSA: number;
        ESP_ATAQUE: number;
        ESP_DEFENSA: number;
        VELOCIDAD: number;
    };
};

type PokeContextType = {
    pokemon: Pokemon | null;
    loading: boolean;
    found: boolean;
    search: (nombre: string) => Promise<void>;
};

export const PokeContext = createContext<PokeContextType>({
    pokemon: null,
    loading: false,
    found: true,
    search: async () => {},
});

export function PokeProvider({ children }: { children: ReactNode }) {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState(false);
    const [found, setFound] = useState(true);

    const search = async (nombre: string) => {
        setLoading(true);
        setFound(true);

        try {
            const response = await fetch(`${API_URL}/read/${encodeURIComponent(nombre)}`);
            const data = await response.json();

            // El backend responde 200 aunque no exista, con found: false
            if (!response.ok || !data.ok || !data.found) {
                setPokemon(null);
                setFound(false);
                return;
            }

            setPokemon(data);
            setFound(true);
        } catch (error) {
            console.log(error);
            setPokemon(null);
            setFound(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <PokeContext.Provider value={{ pokemon, loading, search, found }}>
            {children}
        </PokeContext.Provider>
    );
}