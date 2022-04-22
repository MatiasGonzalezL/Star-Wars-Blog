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
			favorites: [],
			characters: [],
			planets: [],
			vehicles: []
		},
		actions: {

			//Aquí se agrega el estado global y los favoritos
		

			//fetch personajes
			fetchCharacter: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(data => setStore({characters: data.results}))
						//console.log(data)
					.catch(error => console.log("Error", error))
			},

			//fetch planetas
			fetchPlanet: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(data => setStore({planets: data.results}))
					.catch(error => console.log("Error", error))
			},

			//fetch vehiculos
			fetchVehicle: () => {
				fetch("https://www.swapi.tech/api/starships")
					.then(response => response.json())
					.then(data => setStore({vehicles: data.results}))
					.catch(error => console.log("Error", error))
			},

			//agregar favoritos
			addFavorites: (item) => {
				const store = getStore();
				let fav = store.favorites;
				setStore({favorites: fav.concat(item)})
				console.log(fav)
			},

			//borrar de favoritos
			deleteFavorites: (id) => {
				const store = getStore();
				const delFav = store.favorites.filter(key => key !== id)
				console.log(delFav);
				setStore({favorites: delFav})
			},


			//Hasta aquí llega el código de la tarea


			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
