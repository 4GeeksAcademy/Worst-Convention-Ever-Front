const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			faq_data: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			getFAQData: () => {
				fetch("../../../../data.json") 
				.then((resp) => resp.json())
				.then((data) => {
					console.log("myString: ", data)
					setStore({ faq_data: data.faq_data })
				} )
				//console log data
		},		
		}
	};
};

export default getState;
