
import { useEffect } from 'react';
import useGeoLocationStore from '../../store/GeoLocationStore';
// import styles from './Logo.module.css'

const Position = () => {
    const setCurrentPosition = useGeoLocationStore((state) => state.setCurrentPosition)
    const setError = useGeoLocationStore((state) => state.setError)
    const currentPosition = useGeoLocationStore((state) => state.currentPosition)
    const fetchCityName = useGeoLocationStore((state) => state.fetchCityName);
    const city = useGeoLocationStore((state) => state.city);
    useEffect(() => {
        // setTimeout(()=>{})
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
                setCurrentPosition({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            //    navigator.geolocation.clearWatch(geoId)

            },
                (err) => {
                    setError(err.message);
                }
            );

        } else {
            setError('Geolocation is not supported');
        }

    }, []);

    useEffect(()=>{
       setTimeout(() => {fetchCityName(currentPosition.lat, currentPosition.lng)}, 1000);
       return clearTimeout();
    },[currentPosition])
    console.log(currentPosition, city)

    return (

        <h3 >
            {city}
        </h3>

    )
}
export default Position;