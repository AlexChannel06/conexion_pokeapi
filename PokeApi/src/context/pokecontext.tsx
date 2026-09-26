import React, { createContext, useState, useContext, use, useEffect } from 'react';


export const PokeContext = createContext(null);

export function PokeProvider({ children }){
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [found, setFound] = useState(true);

    const search = async ( nombre:string ) => {
        setLoading(true);
        setFound(true);

        try{
            const response = await fetch(`http://10.197.160.44:3001/pokemon/${nombre}`);
            if (!response.ok){
                setFound(false);
                throw new Error('Ese pokemon no existe (aún)')
            }
            const data = await response.json();
            setPokemon(data);
            setFound(true);
        } catch (Error){
            console.log(Error);
        } finally{
            setLoading(false);
        }
    };

    return (
        <PokeContext.Provider value={{ pokemon, loading, search, found}}>
            {children}
        </PokeContext.Provider>
    )
}