const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            naves: [],
            planetas: [],
            personajes: [],
            favorites: [], // Lista de favoritos
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

            toggleFavorite: (item) => {
                const store = getStore();
                const favorites = store.favorites;
                const isFavorite = favorites.some(fav => fav.uid === item.uid);

                if (isFavorite) {
                    // Remover de favoritos
                    setStore({ favorites: favorites.filter(fav => fav.uid !== item.uid) });
                } else {
                    // Agregar a favoritos
                    setStore({ favorites: [...favorites, item] });
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
