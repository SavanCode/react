console.log('destructuring');

const person = {
	name: 'Richard',
	age: 28,
	location: {
		city: 'Weymouth',
		temp: 40,
	},
}; 

const { name = 'Anonymous', age } = person;

console.log(`${name} is ${age}.`);

if (person.location.city && person.location.temp) {
	console.log(`It's ${person.location.temp} degrees in ${person.location.city}.`);
}
 

const book = {
	title: 'Ego is the enemy',
	author: 'Ryan Holiday',
	publisher: {
		name: 'Penguin',
	},
};

const { name: publisherName = 'Self-Published' } = book.publisher;

if (publisherName) {
	console.log(publisherName);
}  
const address = ['1299 Dorchester Road', 'Weymouth', 'Dorset', 'DT10AA'];

const [, city, , postcode, country = 'the UK'] = address; 

console.log(`You are in ${city}, ${postcode} in ${country}`);

const item = ['Coffee (hot)', 'Â£2.00', 'Â£2.50', 'Â£2.75', 'Coffee (iced)', 'Â£2.50', 'Â£3.25', 'Â£3.50'];

const [hotDrink, , medium, , coldDrink, , , large] = item;

console.log(`A medium ${hotDrink} costs = ${medium} and a large ${coldDrink} costs = ${large}`);
