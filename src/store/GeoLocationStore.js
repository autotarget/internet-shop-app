import axios from "axios";
import { create } from "zustand";

const useGeoLocationStore = create((set) => ({
    city: '',
    
currentPosition: null,
error: null,
setCity: (city)=> set({city}),
fetchCityName: async (lat, lng ) =>{
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}`);
        const cityName = response.data.name;
        set({city:cityName});
    } catch (error) {
        console.error('Ошибка при получении названия города:', error);
    }
},
setCurrentPosition: (position)=>set({currentPosition: position}),
setError: (error)=>set({error})
}));

export default useGeoLocationStore;