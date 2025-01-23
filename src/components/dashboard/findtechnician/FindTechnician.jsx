import React, { useState, useEffect, useRef } from "react";
import { LoadScript, GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import FindTechnicianStyle from "../../../styles/FindTechnician.module.css";

const mapContainerStyle = {
  width: "80%",
  height: "600px",
};

const defaultCenter = {
  lat: 6.5244, // Lagos latitude
  lng: 3.3792, // Lagos longitude
};

const FindTechnician = () => {
  const [clientLocation, setClientLocation] = useState(""); // Client's input address
  const [technicianLocation, setTechnicianLocation] = useState({ lat: 40.73061, lng: -73.935242 }); // Mocked technician location
  const [mapCenter, setMapCenter] = useState(defaultCenter); // Map's initial center
  const [directions, setDirections] = useState(null);
  const mapRef = useRef(null); // Reference for the map instance
  const technicianMarkerRef = useRef(null); // Reference for the technician marker
  const clientMarkerRef = useRef(null); // Reference for the client marker

  const mapApiKey = "YOUR_GOOGLE_MAPS_API_KEY";

  // Fetch directions from Google Directions API
  const fetchDirections = async (clientLoc, technicianLoc) => {
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      
      {
        origin: clientLoc,
        destination: technicianLoc,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error(`Error fetching directions: ${status}`);
        }
      }
    );
  };

  // Handle client location geocoding
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!clientLocation) return;

    try {
      const results = await geocodeByAddress(clientLocation);
      const { lat, lng } = await getLatLng(results[0]);
      const clientLatLng = { lat, lng };

      setMapCenter(clientLatLng);

      // Update the client marker on the map
      if (mapRef.current) {
        if (!clientMarkerRef.current) {
          clientMarkerRef.current = new window.google.maps.marker.AdvancedMarkerElement({
            map: mapRef.current,
            position: clientLatLng,
            title: "You",
          });
        } else {
          clientMarkerRef.current.position = clientLatLng;
        }
      }

      // Fetch directions between client and technician
      fetchDirections(clientLatLng, technicianLocation);
    } catch (error) {
      console.error("Error processing client location:", error);
    }
  };

  // Update technician's position dynamically
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTechnicianLocation = {
        lat: technicianLocation.lat + 0.0001,
        lng: technicianLocation.lng + 0.0001,
      };
      setTechnicianLocation(updatedTechnicianLocation);

      // Update technician marker
      if (mapRef.current) {
        if (!technicianMarkerRef.current) {
          technicianMarkerRef.current = new window.google.maps.marker.AdvancedMarkerElement({
            map: mapRef.current,
            position: updatedTechnicianLocation,
            title: "Technician",
          });
        } else {
          technicianMarkerRef.current.position = updatedTechnicianLocation;
        }
      }
    }, 3000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [technicianLocation]);

  return (
    <div className={FindTechnicianStyle.container}>
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
      <div style={{ height: "500px", width: "100%" }}>
        <LoadScript googleMapsApiKey={mapApiKey}>
          <GoogleMap
            center={mapCenter}
            zoom={14}
            mapContainerStyle={mapContainerStyle}
            onLoad={(map) => (mapRef.current = map)}
          >
            {/* Directions Renderer */}
            {directions && <DirectionsRenderer directions={directions} />}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default FindTechnician;
