import { useLoadScript } from "@react-google-maps/api";
import { config } from "../../utils/config";

export default function useGetAddressFromCoord() {
  // Check if map is loaded correctly based on the given API key
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: config.MAP_KEY!,
    libraries: ["places"],
  });

  const getAddress = async (lat: number, lng: number) => {
    if (!isLoaded) {
      console.error("Google Maps API is not loaded");
      return null;
    }

    const geocoder = new google.maps.Geocoder();

    return new Promise((resolve, reject) => {
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === "OK" && results![0]) {
          resolve(results![0].formatted_address); // Return the formatted address
        } else {
          reject(`Geocoder failed due to: ${status}`);
        }
      });
    });
  };

  return { getAddress };
}