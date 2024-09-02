const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            naves: [],
            planetas: [],
            personajes: [],
            favorites: [], 
            isDropdownOpen: false
        },
        actions: {
            planetas: () => {
                fetch('https://swapi.dev/api/planets')
                    .then((response) => response.json())
                    .then((data) => setStore({ planetas: data.results }))
                    .catch(error => console.error('Error fetching planets:', error));
            },

            naves: () => {
                fetch('https://swapi.dev/api/starships')
                    .then((response) => response.json())
                    .then((data) => setStore({ naves: data.results }))
                    .catch(error => console.error('Error fetching starships:', error));
            },

            personajes: () => {
                fetch('https://swapi.dev/api/people')
                    .then((response) => response.json())
                    .then((data) => setStore({ personajes: data.results }))
                    .catch(error => console.error('Error fetching characters:', error));
            },

            toggleFavorite: (item) => {
                const store = getStore();
                const favorites = store.favorites;
                const isFavorite = favorites.some(fav => fav.uid === item.uid);

                if (isFavorite) {
                    setStore({ favorites: favorites.filter(fav => fav.uid !== item.uid) });
                } else {
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
