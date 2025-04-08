import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet para manejar iconos

// Corrige el problema del icono predeterminado de Leaflet con Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MapComponent = ({ cities }) => {
  const position = [36.2048, 138.2529]; // Centro aproximado de Japón

  return (
    <MapContainer 
      center={position} 
      zoom={5} 
      scrollWheelZoom={true} 
      style={{ height: '60vh', width: '100%' }}
      className="rounded-lg shadow-md"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cities.map(city => (
        // Asegúrate de que lat y lng existan
        city.lat && city.lng && (
          <Marker key={city.id} position={[city.lat, city.lng]}>
            <Popup>
              {city.name}
            </Popup>
          </Marker>
        )
      ))}
    </MapContainer>
  );
}

export default MapComponent; 