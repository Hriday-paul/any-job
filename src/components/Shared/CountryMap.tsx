"use client";
import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapKey = process.env.NEXT_PUBLIC_MAP_KEY!

const CountryMap = ({ setSelectedCountry, height = '500px' }: { setSelectedCountry: React.Dispatch<React.SetStateAction<string | null>>, height ?: string }) => {

    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined" && window.google) {
            setCoordinates({
                lat: 53.41291,
                lng: -8.24389
            });
        }
    }, []);

    const handleMapClick = (event: google.maps.MapMouseEvent) => {
        if (!event.latLng || !map) return;

        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: event.latLng }, (results, status) => {
            if (status === "OK" && results && results.length > 0) {
                const countryResult = results.find((res) =>
                    res.types.includes("country")
                );
                if (countryResult) {
                    setSelectedCountry(countryResult.formatted_address);
                    const latLng = countryResult.geometry.location;
                    setCoordinates({ lat: latLng.lat(), lng: latLng.lng() });
                    map.panTo(latLng);
                }
            }
        });
    };

    return (
        <div>
            <LoadScript googleMapsApiKey={mapKey}>
                <GoogleMap
                    mapContainerStyle={{ height: height, width: "100%" }}
                    center={coordinates || {
                        "lat": 53.41291,
                        "lng": -8.24389
                    }}
                    zoom={8}
                    onLoad={(map) => setMap(map)}
                    onClick={handleMapClick} // Handle clicks to select a country
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

export default CountryMap;
