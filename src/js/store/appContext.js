import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Crear el contexto
export const Context = React.createContext(null);

// Función para inyectar el contexto en el componente pasado
const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        // Inicializar el estado del contexto
        const [state, setState] = useState(() => getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: updatedStore => setState(prevState => ({
                store: { ...prevState.store, ...updatedStore },
                actions: { ...prevState.actions }
            }))
        }));

        useEffect(() => {
            // Cargar datos iniciales usando acciones
            const { Starships, Planets, People } = state.actions;
            Starships();
            Planets();
            People();
        }, [state.actions]);

        // Proveer el contexto con el estado actual
        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;
