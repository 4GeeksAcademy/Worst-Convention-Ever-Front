import "../../../../data.json";
// const fs = require("fs");
// const get = require("lodash.get");

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// message: null,
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ],
			events: [ 
			{
				'id': 1,
				'event_name': 'Opening Ceremony',
				'date': '2023-10-20',
				'start_time': '10:00 AM',
				'end_time': '11:00 AM',
				'location': 'Main Stage',
				'description': 'Kick off the convention with an exciting opening ceremony. Join us for special guest introductions, cosplay showcases, and surprises!'
			},
			{
				"id": 2,
				"event_name": "Comic Book Panel",
				"date": "2023-10-20",
				"start_time": "10:00 AM",
				"end_time": "11:30 AM",
				"location": "Main Hall",
				"description": "Join us for an exciting panel discussion on the history and future of comic books."
			},
			{
				"id": 3,
				"event_name": "Artist Alley",
				"date": "2023-10-20",
				"start_time": "12:00 PM",
				"end_time": "5:00 PM",
				"location": "Exhibition Hall",
				"description": "Meet your favorite comic book artists and get your comics signed."
			},
			{
				"id": 4,
				"event_name": "Cosplay Contest",
				"date": "2023-10-21",
				"start_time": "2:00 PM",
				"end_time": "4:30 PM",
				"location": "Cosplay Stage",
				"description": "Show off your amazing cosplay skills and win fantastic prizes!"
			},
			{
			"id": 5,
			"event_name": "Superhero Movie Screening",
			"date": "2023-10-21",
			"start_time": "7:00 PM",
			"end_time": "10:00 PM",
			"location": "Cinema Hall",
			"description": "Enjoy a special screening of the latest superhero blockbuster movie."
			},
			{
				"id": 6,
				"event_name": "Comic Book Collectors' Auction",
				"date": "2023-10-22",
				"start_time": "11:00 AM",
				"end_time": "1:30 PM",
				"location": "Auction Hall",
				"description": "Bid on rare and collectible comic books from various eras."
			},
			{
				"id": 7,
				"event_name": "Interactive Workshop: Character Design",
				"date": "2023-10-22",
				"start_time": "3:00 PM",
				"end_time": "4:30 PM",
				"location": "Workshop Room A",
				"description": "Learn the art of character design from industry experts."
			},
			{
				'id': 8,
				'event_name': 'Superhero Meet and Greet',
				'date': '2023-10-14',
				'start_time': '11:00 AM',
				'end_time': '12:30 PM',
				'location': 'Heroes Hall',
				'description': 'Get up close and personal with your favorite superheroes. Take photos, get autographs, and chat with the stars!'
			},
			{
				'id': 9,
				'event_name': 'Sci-Fi Writers Panel',
				'date': '2023-10-15',
				'start_time': '2:00 PM',
				'end_time': '3:30 PM',
				'location': 'Panel Room B',
				'description': 'Join bestselling science fiction authors as they discuss their latest works, share insights, and answer your burning questions.'
			},
			{
				'id': 10,
				'event_name': 'Gaming Tournament',
				'date': '2023-10-15',
				'start_time': '4:00 PM',
				'end_time': '7:00 PM',
				'location': 'Gaming Arena',
				'description': 'Compete in a thrilling video game tournament. Prizes await the champions, so bring your A-game!'
			},
			{
				'id': 11,
				'event_name': 'Closing Ceremony',
				'date': '2023-10-16',
				'start_time': '6:00 PM',
				'end_time': '7:30 PM',
				'location': 'Main Stage',
				'description': 'Wrap up the convention with our grand closing ceremony. Reflect on the amazing weekend and get a sneak peek at what’s to come next year!'
			}
		]
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
			}, 
			
			getEvents: () => {
				fetch("../../../../data.json") //need to edit the link
				.then((resp) => resp.json())
				.then((data) => {
					console.log("myString: ", data)
					setStore({ events: data.events })
				} )
				//console log data
			}
		}
	};
};

export default getState;
