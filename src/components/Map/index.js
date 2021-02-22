import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import "../../style/MapStyle/index.scss"
import FooterGray from "../Footer/FooterGray";



const containerStyle = {
    width: '100%',
    height: '500px',
}

const center = {
    lat: -3.745,
    lng: -38.523
};

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "YOUR_API_KEY"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

 return !isLoaded ? (
     <>
        {/*  <GoogleMap*/}
        {/*    mapContainerStyle={containerStyle}*/}
        {/*    center={center}*/}
        {/*    zoom={100}*/}
        {/*    onLoad={onLoad}*/}
        {/*    onUnmount={onUnmount}*/}
        {/*>*/}
        {/*</GoogleMap>*/}
        {/* <FooterGray/>*/}
     </>

    ) :
     <>
         <div className={"loadingMap"}>
          <div className="wrapper">
            <div className="circle"> </div>
            <div className="circle"> </div>
            <div className="circle"> </div>
            <div className="shadow"> </div>
            <div className="shadow"> </div>
            <div className="shadow"> </div>
           <span>Loading...</span>
          </div>
         </div>
    <FooterGray/>
    </>
}

export default React.memo(Map)