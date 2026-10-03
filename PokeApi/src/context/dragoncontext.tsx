import React, { createContext, useState, useContext, useEffect } from 'react';

export const DragonContext = createContext(null);

export function DragonProvider({ children }) {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(false);
    const [found, setFound] = useState(true);

    const scout = async (nombre: string) => {
        setLoading(true);
        setFound(true);

        try {
            const response = await fetch(`http://10.98.7.44:3001/dragon/${nombre}`);
            if (!response.ok) {
                setFound(false);
                throw new Error('Ese personaje no existe (aún)');
            }
            const data = await response.json();
            setCharacter(data);
            setFound(true);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <DragonContext.Provider value={{ character, loading, scout, found }}>
            {children}
        </DragonContext.Provider>
    );
}