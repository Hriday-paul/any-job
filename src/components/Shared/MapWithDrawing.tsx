"use client"

import { useState, useRef } from "react"
import { GoogleMap, LoadScriptNext, DrawingManager } from "@react-google-maps/api"

const mapKey = process.env.NEXT_PUBLIC_MAP_KEY!

const MapWithDrawing = ({ height = "500px" }: { height?: string }) => {
    // const [map, setMap] = useState<google.maps.Map | null>(null)
    const [googleMaps, setGoogleMaps] = useState<typeof google.maps | null>(null)
    const [selectedArea, setSelectedArea] = useState<{ lat: number; lng: number }[]>([])
    const polygonRef = useRef<google.maps.Polygon | null>(null)
    const drawingManagerRef = useRef<google.maps.drawing.DrawingManager | null>(null)

    const onLoad = (mapInstance: google.maps.Map) => {
        // setMap(mapInstance)
        setGoogleMaps(window.google.maps)
    }

    const clearCurrentPolygon = () => {
        if (polygonRef.current) {
            polygonRef.current.setMap(null)
            polygonRef.current = null
        }
        setSelectedArea([])
    }

    const onDrawingManagerLoad = (drawingManager: google.maps.drawing.DrawingManager) => {
        drawingManagerRef.current = drawingManager
    }

    const onOverlayComplete = (event: google.maps.drawing.OverlayCompleteEvent) => {
        // Clear any existing polygon
        clearCurrentPolygon()

        const polygon = event.overlay as google.maps.Polygon
        polygonRef.current = polygon

        // Get the path of the new polygon
        const path = polygon
            .getPath()
            .getArray()
            .map((coord) => ({
                lat: coord.lat(),
                lng: coord.lng(),
            }))

        setSelectedArea(path)

        // Disable drawing after polygon is created
        if (drawingManagerRef.current) {
            drawingManagerRef.current.setDrawingMode(null)
        }

        // Add path change listener to update selectedArea when polygon is edited
        polygon.addListener("paths_changed", () => {
            const newPath = polygon
                .getPath()
                .getArray()
                .map((coord) => ({
                    lat: coord.lat(),
                    lng: coord.lng(),
                }))
            setSelectedArea(newPath)
        })
    }

    // const handleEditClick = () => {
    //     clearCurrentPolygon()
    //     if (drawingManagerRef.current) {
    //         drawingManagerRef.current.setOptions({
    //             drawingControl: true,
    //         })
    //     }
    // }

    return (
        <div className="space-y-4">
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
                                onLoad={onDrawingManagerLoad}
                                options={{
                                    drawingControl: selectedArea.length === 0,
                                    drawingControlOptions: {
                                        position: googleMaps.ControlPosition.TOP_CENTER,
                                        drawingModes: [googleMaps.drawing.OverlayType.POLYGON],
                                    },
                                    polygonOptions: {
                                        fillColor: "#E54748",
                                        strokeWeight: 2,
                                        editable: true,
                                        // draggable: true,
                                    },
                                }}
                                onOverlayComplete={onOverlayComplete}
                            />
                        )}
                    </GoogleMap>
                </>
            </LoadScriptNext>

            {/* {selectedArea.length > 0 && (
                <button
                    onClick={handleEditClick}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                >
                    Draw New Area
                </button>
            )} */}
            {/* {selectedArea && (
                <div className="p-4 bg-gray-100 mt-4">
                    <h3 className="text-lg font-bold">Selected Area Details</h3>
                    <pre className="text-sm">{JSON.stringify(selectedArea, null, 2)}</pre>
                </div>
            )} */}
        </div>
    )
}

export default MapWithDrawing

