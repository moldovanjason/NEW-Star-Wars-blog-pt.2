const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},

		actions: {
			addFavorite: favorite => {
				const store = getStore();
				const newFavorite = [{ name: favorite }];
				const updateStore = store.favorites.concat(newFavorite);
				setStore({ favorites: updateStore });
			},

			delFavorite: id => {
				const store = getStore();
				const returnArr = store.favorites.filter((i, index) => index !== id);
				setStore({ favorites: returnArr });
			},

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
