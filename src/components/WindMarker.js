import React from 'react';
import { Icon } from '@iconify/react';
import WeatherWindy from '@iconify/icons-mdi/weather-windy';


const WindMarker = ({ lat, lng, onClick }) => {
    return (
        <div className='location-marker' onClick={onClick}>
            <Icon icon={WeatherWindy} className='location-icon' />
        </div>
    )

}


export default WindMarker
