import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom Marker Icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

export default function Map() {
  const defaultCenter = [10.99835602, 77.01502627];
  const zoomLevel = 11;

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer center={defaultCenter} zoom={zoomLevel} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={defaultCenter} icon={customIcon}>
          <Popup>
            <strong>My Custom Marker</strong><br /> Latitude: {defaultCenter[0]} <br /> Longitude: {defaultCenter[1]}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
