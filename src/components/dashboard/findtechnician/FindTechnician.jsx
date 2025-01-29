import React, { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "../../../styles/FindTechnician.module.css";

// Fix for Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const FindTechnician = () => {
  const [clientLocation, setClientLocation] = useState(""); // Client's input address
  const [technicianLocation, setTechnicianLocation] = useState({ lat: 6.5244, lng: 3.3792 }); // Initial technician location
  const [map, setMap] = useState(null); // Reference to the Leaflet map instance
  const [routingControl, setRoutingControl] = useState(null); // Routing control instance

  // Initialize the map on component mount
  useEffect(() => {
    const mapInstance = L.map("map").setView([6.5244, 3.3792], 13); // Lagos coordinates
    setMap(mapInstance);

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© OpenStreetMap contributors',
    }).addTo(mapInstance);

    // Add technician marker
    const technicianMarker = L.marker([technicianLocation.lat, technicianLocation.lng]).addTo(mapInstance);

    // Simulate real-time technician movement
    const interval = setInterval(() => {
      setTechnicianLocation((prevLocation) => {
        const updatedLocation = {
          lat: prevLocation.lat + 0.0001,
          lng: prevLocation.lng + 0.0001,
        };
        technicianMarker.setLatLng([updatedLocation.lat, updatedLocation.lng]); // Update marker position
        mapInstance.panTo([updatedLocation.lat, updatedLocation.lng]); // Center the map
        return updatedLocation;
      });
    }, 3000);

    return () => {
      clearInterval(interval); // Clear interval on component unmount
      mapInstance.remove(); // Clean up the map instance
    };
  }, []);

  // Handle form submission to geocode client address
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!clientLocation || !map) return;

    // Geocode client address (use a free geocoding service like Nominatim)
    const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      clientLocation
    )}&format=json&limit=1`;
    try {
      const response = await fetch(geocodeUrl);
      const data = await response.json();
      if (data.length > 0) {
        const clientLatLng = { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };

        // Add client marker to the map
        const clientMarker = L.marker([clientLatLng.lat, clientLatLng.lng], { title: "You" }).addTo(map);
        map.setView([clientLatLng.lat, clientLatLng.lng], 13); // Center the map on the client location

        // Add routing from client to technician
        if (routingControl) {
          map.removeControl(routingControl); // Remove previous routing control
        }

        const newRoutingControl = L.Routing.control({
          waypoints: [L.latLng(clientLatLng.lat, clientLatLng.lng), L.latLng(technicianLocation.lat, technicianLocation.lng)],
          routeWhileDragging: true,
        }).addTo(map);
        setRoutingControl(newRoutingControl);
      } else {
        alert("Location not found. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching geocode data:", error);
    }
  };

  return (
    <div className={styles.container}>
      {/* Input Section */}
      <div className={styles.inputContainer}>
        <h1>Track Your Technician</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Enter your location"
            value={clientLocation}
            onChange={(e) => setClientLocation(e.target.value)}
            required
          />
          <button type="submit">Find Technician</button>
        </form>
      </div>

      {/* Map Section */}
      <div id="map" className={styles.mapContainer} style={{ height: "600px", width: "100%" }}></div>
    </div>
  );
};

export default FindTechnician;
