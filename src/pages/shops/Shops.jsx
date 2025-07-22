import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import '../../../src/index.css';

const Shops = () => {
 const position = [51.505, -0.09];
    return (

        <div className="container">
            <h1 >
                Page for Shops
            </h1>
            <div>
<MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{width:'1000px', height:'600px'}}>
     <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      </MapContainer>
            </div>
        </div>
    )
}
export default Shops;