import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '500px'
};

function MyComponent() {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });

        // console.log("Latitude is:", lat)
        // console.log("Longitude is:", long)
    }, [lat, long]);

    const center = {
        lat:+ lat,
        lng: +long
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAZSDjQGRLzyHt90brGMVLQ8Ggs6ZVRonA"
    })
    return isLoaded ? (
        <div className="map ">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >

                <Marker key="marker_1"

                    position={center}
                />
                <></>
            </GoogleMap>
        </div>
    ) : <></>
}

export default React.memo(MyComponent)