"use client"

import { useEffect, useRef, useState } from "react"
import type React from "react"
import { GoogleMap, LoadScriptNext, DrawingManager } from "@react-google-maps/api"
import { config } from "../../../utils/config"

const mapKey = config.MAP_KEY!

const MapWithDrawing = ({
  height = "500px",
  selectedArea,
  setSelectedArea,
  defaultSelectedArea = [],
}: {
  height?: string
  selectedArea: { latitude: number; longitude: number }[][]
  setSelectedArea: React.Dispatch<React.SetStateAction<{ latitude: number; longitude: number }[][]>>
  defaultSelectedArea?: { latitude: number; longitude: number }[][]
}) => {
  const [googleMaps, setGoogleMaps] = useState<any>(null)
  const polygonsRef = useRef<google.maps.Polygon[]>([])
  const mapRef = useRef<google.maps.Map | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const defaultPolygonsCreated = useRef(false)

  const onLoad = (map: google.maps.Map) => {
    mapRef.current = map;
    setTimeout(() => {
      setGoogleMaps(window.google.maps);
      setMapLoaded(true);
    }, 500);
  };

  const onOverlayComplete = (event: google.maps.drawing.OverlayCompleteEvent) => {
    const polygon = event.overlay as google.maps.Polygon

    // Store reference to the polygon
    polygonsRef.current.push(polygon)

    const path = polygon
      .getPath()
      .getArray()
      .map((coord) => ({
        latitude: coord.lat(),
        longitude: coord.lng(),
      }))

    setSelectedArea((prev) => [...prev, path])
  }

  // Create default polygons when the map and Google Maps are loaded
  useEffect(() => {
    // Only run this once when the map is loaded and we have defaultSelectedArea
    if (
      googleMaps &&
      mapRef.current &&
      defaultSelectedArea.length > 0 &&
      mapLoaded &&
      !defaultPolygonsCreated.current
    ) {

      try {
        // Create polygons for each path in defaultSelectedArea
        defaultSelectedArea.forEach((path) => {
          if (path.length > 0) {
            // Convert our latitude/longitude objects to Google Maps LatLng objects
            const polygonPath = path.map((coord) => new googleMaps.LatLng(coord.latitude, coord.longitude))

            // Create a new polygon
            const polygon = new googleMaps.Polygon({
              paths: polygonPath,
              strokeWeight: 2,
              fillColor: "#E54748",
              editable: true,
              map: mapRef.current,
            })

            // Add the polygon to our refs array
            polygonsRef.current.push(polygon)
          }
        })

        defaultPolygonsCreated.current = true
        console.log("Default polygons created successfully")
      } catch (error) {
        console.error("Error creating default polygons:", error)
      }
    }
  }, [googleMaps, mapLoaded, defaultSelectedArea])

  // Clean up polygons when selectedArea is cleared
  useEffect(() => {
    if (selectedArea.length === 0 && polygonsRef.current.length > 0) {
      polygonsRef.current.forEach((polygon) => {
        polygon.setMap(null)
      })
      polygonsRef.current = []
      defaultPolygonsCreated.current = false
    }
  }, [selectedArea])

  return (
    <LoadScriptNext googleMapsApiKey={mapKey} libraries={["drawing"]}>
      <>
        <GoogleMap
          mapContainerStyle={{ height: height, width: "100%" }}
          center={
            selectedArea.length > 0 && selectedArea[selectedArea.length - 1].length > 0
              ? {
                lat: selectedArea[selectedArea.length - 1][selectedArea[selectedArea.length - 1].length - 1].latitude,
                lng: selectedArea[selectedArea.length - 1][selectedArea[selectedArea.length - 1].length - 1].longitude,
              }
              : defaultSelectedArea.length > 0 && defaultSelectedArea[defaultSelectedArea.length - 1].length > 0
                ? {
                  lat: defaultSelectedArea[defaultSelectedArea.length - 1][defaultSelectedArea[defaultSelectedArea.length - 1].length - 1].latitude,
                  lng: defaultSelectedArea[defaultSelectedArea.length - 1][defaultSelectedArea[defaultSelectedArea.length - 1].length - 1].longitude,
                }
                : { lat: 53.3498, lng: -6.2603 } // Default fallback coordinates
          }
          zoom={10}
          onLoad={onLoad}
        >
          {googleMaps && (
            <DrawingManager
              options={{
                drawingControl: selectedArea?.length > 0 ? false : true,
                drawingControlOptions: {
                  position: googleMaps.ControlPosition.TOP_CENTER,
                  drawingModes: [googleMaps.drawing.OverlayType.POLYGON],
                },
                polygonOptions: {
                  fillColor: "#E54748",
                  strokeWeight: 2,
                  editable: true,
                },
                drawingMode: googleMaps.drawing.OverlayType.POLYGON,
              }}
              onOverlayComplete={onOverlayComplete}
            />
          )}
        </GoogleMap>
      </>
    </LoadScriptNext>
  )
}

export default MapWithDrawing

