import axios from "axios";
import { create } from "zustand";
import { apiKey } from "../../names";



const useGeoLocationStore = create((set) => ({
    city: '',
    currentPosition: null,
    error: null,
    
    setCity: (city) => set({ city }),
    fetchCityName: async (lat, lon) => {
       
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
            const cityName = response.data.name;
            set({ city: cityName });
        } catch (error) {
            console.error('Ошибка при получении названия города:', error);
        }
    },
    setCurrentPosition: (position) => set({ currentPosition: position }),
    setError: (error) => set({ error })
}));

export default useGeoLocationStore;