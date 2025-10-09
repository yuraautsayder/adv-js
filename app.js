'use strict';

const flinghts = ['Russia', 'USA', 'Cezh', 'Cezh', 'USA'];
const setFlights = new Set(flinghts);
//console.log(setFlights);
//console.log(setFlights.size)
//console.log(setFlights.has('Russia'))
//setFlights.add('Paris');
//setFlights.delete('Russia');
//console.log(setFlights);

for (const flight of setFlights) {
	console.log(flight)
}

console.log([...setFlights])
