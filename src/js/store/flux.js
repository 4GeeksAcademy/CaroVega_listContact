const fakeApiListContact = "https://playground.4geeks.com/apis/fake/contact/"
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[],
			agenda:"agenda/agendanueva"
		},
		actions: {
			
			// Use getActions to call a function within a fuction
			getDataContac: async() => {
				const {agenda} =getStore();
				
				try{
					const resp = await fetch(fakeApiListContact+agenda, {
						method:"GET",
						headers:{"Content-Type": "application/json",},
					});
					if (resp.ok) {
						const contacts = await resp.json();
						setStore({contacts});
						console.log (contacts);
						
					} else {
						console.error("Error al obtener datos de la API. Respuesta completa:", await resp.text());
					}
					
				}catch (error){
					console.error({error})
					return
				}
				
			},

			addContac: (data)=>{
				console.log("desde store recibi datos", data)
				const {contacts} = getStore();
				setStore({ contacts: [...contacts,data] });
				//setStore({contacts: [data]})
				
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
