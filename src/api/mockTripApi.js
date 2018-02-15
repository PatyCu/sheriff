import delay from './delay';
import { setTimeout } from 'timers';

const trips = [
    {
        id: "donostia",
        name: "San Sebastian",
        coverPhoto: "donostia.jpg"
    },
    {
        id: "indonesia",
        name: "Indonesia",
        coverPhoto: "indonesia.jpg"
    },
    {
        id: "laos",
        name: "Cambodia and Laos",
        coverPhoto: "laos.jpg"
    },
    {
        id: "oporto",
        name: "Oporto",
        coverPhoto: "oporto.jpg"
    },
    {
        id: "pirineus",
        name: "Els Pirineus",
        coverPhoto: "pirineus.jpg"
    },
    {
        id: "porrera",
        name: "Porrera",
        coverPhoto: "porrera.jpg"
    },
    {
        id: "priorat",
        name: "Priorat i Vall Llach",
        coverPhoto: "priorat.jpg"
    },
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (trip) => {
    return replaceAll(trip.name, ' ', '-');
};

class TripApi {

    static getAllTrips() {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], trips));
                if (trips.length == 0) {
                    reject(`No trips to load`);
                }
            }, delay);
        });
    }

    static saveTrip(trip) {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minTripNameLength = 1;
                if(trip.name.length < minTripNameLength) {
                    reject(`Trip name must be at least ${minTripNameLength} characters`);
                }

                if(trip.id) {
                    //the trip already exists so we remove it from the array to later reinsert the updated version
                    const existingTripIndex = trips.findIndex(a => a.id == trip.id);
                    trips.splice(existingTripIndex, 1, trip);
                } else {
                    // Simulate server-side creation of a new trip
                    trip.id = generateId(trip);
                    trips.push(trip);
                }

                resolve(Object.assign({}, trip));
            }, delay);
        });
    }
}

export default TripApi;