import React from 'react';
import { Icon } from '@iconify/react';
import LocationIcon from '@iconify/icons-mdi/fire-alert'

const Header = () => {
    return (
        <header className='header'>
            <h1><Icon icon={LocationIcon} />Wildfire Tracker(Powered By Nasa)</h1>
            
        </header>
    )
}

export default Header
