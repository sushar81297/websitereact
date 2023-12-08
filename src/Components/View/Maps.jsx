import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import mapboxgl from "mapbox-gl";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { map_access_token, map_style } from "../../Api";
import { useSelector, useDispatch } from "react-redux";
import {
  setZoom,
  setCurrentLat,
  setCurrentLong,
  resetLocation,
} from "../../feature/counter/locationSlice";
import {
  setCurrentCenter,
  setCurrentZoom,
} from "../../feature/counter/pageSlice";
import { fetchLocation } from "../../feature/counter/locationSlice";

function Maps() {
  mapboxgl.accessToken = map_access_token;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const { latitude, longitude } = useParams();
  const zoompoint = useSelector((state) => state.page.zoom);
  const currentZoom = useSelector((state) => state.location.currentZoom);
  const currentLong = useSelector((state) => state.location.currentLong);
  const currentLat = useSelector((state) => state.location.currentLat);
  const searchedPlace = useSelector((state) => state.location.data);
  const center = useSelector((state) => state.page.center);
  const [map, setMap] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [markers, setmarkers] = useState([]);

  useEffect(() => {
    if (!map) {
      const newMap = new mapboxgl.Map({
        container: "map",
        style: map_style,
        center: latitude && longitude ? [longitude, latitude] : center,
        zoom: latitude && longitude ? 16 : zoompoint,
      });
      setMap(newMap);
    }
    if (map) {
      map.on("load", () => {
        if (latitude && longitude) {
          new mapboxgl.Marker()
            .setLngLat([longitude, latitude])
            .setOffset([0, 0])
            .addTo(map);
        } else {
          map.on("zoom", () => {
            dispatch(setZoom(map.getZoom()));
            dispatch(setCurrentZoom(map.getZoom()));
          });
          map.on("move", () => {
            const center = map.getCenter();
            dispatch(setCurrentCenter([center.lng, center.lat]));
            dispatch(setCurrentLat(center.lat));
            dispatch(setCurrentLong(center.lng));
          });
        }
      });
    }
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [map, dispatch, latitude, longitude]);

  useEffect(() => {
    if (!(latitude && longitude)) {
      if (currentZoom >= 13) {
        let timerId;
        // Set the timer to trigger fetchLocation after 0.5 seconds
        if (shouldFetch && currentLat && currentLong) {
          timerId = setTimeout(() => {
            dispatch(fetchLocation({ long: currentLong, lat: currentLat }));
            setShouldFetch(false); // Reset the flag after fetching
          }, 500);
        }

        return () => {
          clearTimeout(timerId); // Clear the timer if the conditions change
        };
      } else {
        // if (shouldFetch) {
        //   dispatch(resetLocation);
        // }
      }
    }
  }, [
    map,
    currentLat,
    currentLong,
    latitude,
    dispatch,
    longitude,
    shouldFetch,
    currentZoom,
  ]);

  useEffect(() => {
    setShouldFetch(true);
  }, [currentZoom, currentLong, currentLat]);

  useEffect(() => {
    if (map) {
      if (markers.length > 0) {
        markers.map((marker) => {
          if (marker.getElement()) {
            marker.remove();
          }
        });
      }
      if (searchedPlace.length > 0 && !latitude && !longitude) {
        const newMarkers = searchedPlace.map((child) => {
          const marker = new mapboxgl.Marker({ color: "red" })
            .setLngLat([child.long, child.lat])
            .addTo(map);
          marker.getElement().addEventListener("click", () => {
            navigate(`/place/${child.id}`);
          });

          return marker;
        });
        setmarkers(newMarkers);
      }
    }
  }, [searchedPlace, map]);

  return (
    <div id="map-container">
      <HighlightOffIcon
        fontSize="large"
        className="close-map btn m-0 p-0 btn-outline-danger"
        onClick={goBack}
      />

      <div id="map" style={{ width: "100%", height: "100vh" }}>
        {" "}
      </div>
    </div>
  );
}

export default Maps;
