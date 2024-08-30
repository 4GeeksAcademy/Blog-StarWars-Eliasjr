const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            navesFlux: [],
            planetFlux: [],
            peopleFlux: [],
            favoriteItems: [], // Lista de favoritos
        },
        actions: {
            addFavorite: (item) => {
                const store = getStore();
                // Verifica si el item ya está en la lista de favoritos
                if (!store.favoriteItems.find(fav => fav.id === item.id)) {
                    setStore({ favoriteItems: [...store.favoriteItems, item] });
                }
            },
            removeFavorite: (id) => {
                const store = getStore();
                setStore({
                    favoriteItems: store.favoriteItems.filter(item => item.id !== id)
                });
            },
            People: () => {
                fetch('https://swapi.dev/api/people/')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Network response was not ok ${response.statusText}`);
                        }
                        return response.json();
                    })
                    .then(data => setStore({ peopleFlux: data.results }))
                    .catch(error => console.error('Error fetching people data:', error));
            },
            Starships: () => {
                fetch('https://www.swapi.tech/api/starships')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Network response was not ok ${response.statusText}`);
                        }
                        return response.json();
                    })
                    .then(data => setStore({ navesFlux: data.results }))
                    .catch(error => console.error('Error fetching starships data:', error));
            },
            Planets: () => {
                fetch('https://www.swapi.tech/api/planets')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Network response was not ok ${response.statusText}`);
                        }
                        return response.json();
                    })
                    .then(data => setStore({ planetFlux: data.results }))
                    .catch(error => console.error('Error fetching planets data:', error));
            },
            changeColor: (index, color) => {
                const store = getStore();
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                setStore({ demo: demo });
            }
        }
    };
};

export default getState;
