import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
// import WindMarker from './WindMarker';

const Map = ({ eventData, center, zoom }) => {

    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8)
        {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}/>
        }
        // if(ev.categories[0].id === 10){
        //     for(var cords in ev.geometries){
        //         return <WindMarker lat={ev.geometries[cords].coordinates[1]} ln={ev.geometries[cords].coordinates[0]} /> 
        //     }
        // }
        return null
    })
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys = {{ key:'AIzaSyAKEHyY_Iqn0815c9iodofXPrFywN3OsAA' }}
                defaultCenter = { center }
                defaultZoom ={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
            
        </div>
    )
};

Map.defaultProps = {
    center : {
        lat: 28.5734678,
        lng: 77.3807051
    },
    zoom : 6
};

export default Map;
