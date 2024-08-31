const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            naves: [],
            planetas: [],
            personajes: [],
            favorites: [], // Agregar una lista de favoritos
            isDropdownOpen: false // Estado para controlar la apertura del dropdown
        },
        actions: {
            planetas: () => {
                fetch('https://www.swapi.tech/api/planets')
                    .then((response) => response.json())
                    .then((data) => setStore({ planetas: data.results }))
                    .catch(error => console.error('Error fetching planets:', error));
            },

            naves: () => {
                fetch('https://www.swapi.tech/api/starships')
                    .then((response) => response.json())
                    .then((data) => setStore({ naves: data.results }))
                    .catch(error => console.error('Error fetching starships:', error));
            },

            personajes: () => {
                fetch('https://www.swapi.tech/api/people')
                    .then((response) => response.json())
                    .then((data) => setStore({ personajes: data.results }))
                    .catch(error => console.error('Error fetching characters:', error));
            },

            toggleFavorite: (personaje) => {
                const store = getStore();
                const favorites = store.favorites;
                const isFavorite = favorites.some(fav => fav.uid === personaje.uid);

                if (isFavorite) {
                    // Remover del favorito
                    setStore({ favorites: favorites.filter(fav => fav.uid !== personaje.uid) });
                } else {
                    // Agregar a favoritos
                    setStore({ favorites: [...favorites, personaje] });
                }
            },

            toggleDropdown: () => {
                const store = getStore();
                setStore({ isDropdownOpen: !store.isDropdownOpen });
            },
        }
    };
};

export default getState;
