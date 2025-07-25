import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import '../../../src/index.css';
import useGeoLocationStore from '../../store/GeoLocationStore';
import styles from './Shops.module.css';

const Shops = () => {
    const currentPosition = useGeoLocationStore((state) => state.currentPosition)
    // const City = useGeoLocationStore((state) => state.city)
    const position = [51.505, -0.09];
    return (
<div className={styles.map_container}>
 <div className="container">
            {/* <h1 >
                Page for Shops
            </h1> */}
            <div>
                {currentPosition && (
                    <MapContainer center={[currentPosition.lat, currentPosition.lon]} zoom={13} scrollWheelZoom={true} style={{ width: '1000px', height: '600px' }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[currentPosition.lat, currentPosition.lon]}>
                            <Popup>
                                MittelKanal, 12
                            </Popup>
                        </Marker>
                    </MapContainer>
                )}
            </div>
        </div>
</div>
       
    )
}
export default Shops;

// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// function MyMapComponent() {
//   const [cityCoordinates, setCityCoordinates] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch('YOUR_API_ENDPOINT');
//         const data = await response.json();
//         // Предполагается, что API возвращает объект с координатами, например: { lat: 52.52, lng: 13.405 }
//         setCityCoordinates({ lat: data.lat, lng: data.lng });
//       } catch (error) {
//         console.error("Ошибка при загрузке данных:", error);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {cityCoordinates && (
//         <Marker position={[cityCoordinates.lat, cityCoordinates.lng]}>
//           <Popup>
//             Город находится здесь.
//           </Popup>
//         </Marker>
//       )}
//     </MapContainer>
//   );
// }

// export default MyMapComponent;