import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export const ViewPlace = ({ places = [] }) => {
  const center =
    places.length > 0
      ? {
          lat: places[0].location.latitude,
          lng: places[0].location.longitude,
        }
      : { lat: -33.9249, lng: 18.4241 };
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}>
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "500px",
        }}
        center={center}
        zoom={13}
      >
        {places.length > 0 &&
          places.map((place) => (
            <Marker
              key={place.id}
              position={{
                lat: place.location.latitude,
                lng: place.location.longitude,
              }}
              title={place.displayName.text}
            />
          ))}
      </GoogleMap>
    </LoadScript>
  );
};
