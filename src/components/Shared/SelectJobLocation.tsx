"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapKey = process.env.NEXT_PUBLIC_MAP_KEY!;

const SelectJobLocation = ({
    height = "500px",
    coordinates,
    setCoordinates,
}: {
    height?: string;
    coordinates: { lat: number; lng: number } | null;
    setCoordinates: React.Dispatch<React.SetStateAction<{ lat: number; lng: number } | null>>;
}) => {

    const handleMapClick = (event: google.maps.MapMouseEvent) => {
        if (!event.latLng) return;

        setCoordinates({
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        });
    };

    return (
        <div>
            <LoadScript googleMapsApiKey={mapKey}>
                <GoogleMap
                    mapContainerStyle={{ height, width: "100%" }}
                    center={coordinates || { lat: 53.41291, lng: -8.24389 }}
                    zoom={5}
                    onClick={handleMapClick}
                >
                    {coordinates && (
                        <Marker
                            position={coordinates}
                            icon={{
                                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                                scaledSize: new google.maps.Size(40, 40),
                            }}
                        />
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default SelectJobLocation;
