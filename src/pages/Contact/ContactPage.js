import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import HeaderComponent from '../components/HeaderComponent';

const containerStyle = {
  width: '700px',
  height: '400px'
};

const center = {
  lat: 43.82516577195752,
  lng: 18.356298944985213
};


function ContactPage() {

  return (
    <div>
      <HeaderComponent />
      <LoadScript
        googleMapsApiKey="AIzaSyACKt4Y_oqEF7CUDVcRzJ5Cozzrwsi4jCs"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default ContactPage