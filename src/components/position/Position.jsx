
import { useEffect } from 'react';
import useGeoLocationStore from '../../store/GeoLocationStore';

const Position = () => {
    const setCurrentPosition = useGeoLocationStore((state) => state.setCurrentPosition)
    const setError = useGeoLocationStore((state) => state.setError)
    const currentPosition = useGeoLocationStore((state) => state.currentPosition)
    const fetchCityName = useGeoLocationStore((state) => state.fetchCityName);
    const city = useGeoLocationStore((state) => state.city);
    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setCurrentPosition({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                });
            },
                (err) => {
                    setError(err.message);
                }
            );

        } else {
            setError('Geolocation is not supported');
        }

    }, []);

    useEffect(() => {
        setTimeout(() => { fetchCityName(currentPosition.lat, currentPosition.lon) }, 1000);
        return clearTimeout();
    }, [currentPosition])
    console.log(currentPosition, city)

    return (
        <h3 >
            {city}
        </h3>
    )
}
export default Position;