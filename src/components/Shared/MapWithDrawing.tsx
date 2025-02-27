"use client";
import { useState } from "react";
import { GoogleMap, LoadScriptNext, DrawingManager } from "@react-google-maps/api";

const mapKey = process.env.NEXT_PUBLIC_MAP_KEY!

const MapWithDrawing = ({height = '500px'}:{height ?: string}) => {
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [googleMaps, setGoogleMaps] = useState<typeof google.maps | null>(null);
    const [selectedArea, setSelectedArea] = useState<{ lat: number, lng: number }[][]>([]);

    const onLoad = (mapInstance: google.maps.Map) => {
        setMap(mapInstance);
        setGoogleMaps(window.google.maps);
    };

    const onOverlayComplete = (event: google.maps.drawing.OverlayCompleteEvent) => {

        const polygon = event.overlay as google.maps.Polygon;
        const path = polygon.getPath().getArray().map(coord => ({
            lat: coord.lat(),
            lng: coord.lng()
        }));

        setSelectedArea(prev=>[...prev, path]);
        console.log("Selected Area:", path);
    };

    return (
        <LoadScriptNext googleMapsApiKey={mapKey} libraries={["drawing"]}>
            <>
                <GoogleMap
                    mapContainerStyle={{ height: height, width: "100%" }}
                    center={{ lat: 53.3498, lng: -6.2603 }} // Dublin
                    zoom={10}
                    onLoad={onLoad}
                >
                    {googleMaps && (
                        <DrawingManager
                            options={{
                                drawingControl: selectedArea?.length > 0 ? false : true,
                                drawingControlOptions: {
                                    position: googleMaps.ControlPosition.TOP_CENTER,
                                    drawingModes: [
                                        googleMaps.drawing.OverlayType.POLYGON,
                                        // googleMaps.drawing.OverlayType.CIRCLE,
                                        // googleMaps.drawing.OverlayType.RECTANGLE,
                                    ],
                                },
                                polygonOptions: { fillColor: "#E54748", strokeWeight: 2, editable: true, paths: selectedArea }, //draggable: true,
                                // circleOptions: { fillColor: "blue", strokeWeight: 2, editable: true },
                                // rectangleOptions: { fillColor: "green", strokeWeight: 2, editable: true },
                            }}
                            onOverlayComplete={onOverlayComplete}
                        />
                    )}
                </GoogleMap>

                {/* Display Selected Area Data */}
                {/* {selectedArea && (
                    <div className="p-4 bg-gray-100 mt-4">
                        <h3 className="text-lg font-bold">Selected Area Details</h3>
                        <pre className="text-sm">{JSON.stringify(selectedArea, null, 2)}</pre>
                    </div>
                )} */}
            </>
        </LoadScriptNext>
    );
};
export default MapWithDrawing;

// can you fix it ? I use only polygon shape. I want to, user can not choose multiple area. That means, user when choose a area, then he can he choose another area or not mark edit