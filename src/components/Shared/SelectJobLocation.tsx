"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapKey = process.env.NEXT_PUBLIC_MAP_KEY!;

const SelectJobLocation = ({
    height = "500px",
    coordinates,
    setCoordinates,
}: {
    height?: string;
    coordinates: { lat: number; lng: number };
    setCoordinates: React.Dispatch<React.SetStateAction<{ lat: number; lng: number }>>;
}) => {

    const handleMapClick = (event: google.maps.MapMouseEvent) => {
        if (!event.latLng) return;

        setCoordinates({
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        });
    }

    return (
        <div>
            <LoadScript googleMapsApiKey={mapKey}>
                <GoogleMap
                    mapContainerStyle={{ height, width: "100%" }}
                    center={coordinates || { lat: 53.3498, lng: -6.2603 }}  // Use fallback coordinates if not provided
                    zoom={7}
                    onClick={handleMapClick}
                >
                    {coordinates && (
                        <Marker
                            position={coordinates}
                           
                        />
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default SelectJobLocation;
