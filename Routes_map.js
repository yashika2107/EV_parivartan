import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {Link} from 'react-router-dom';

const containerStyle = {
  width: '800px',
  height: '400px',
  margin:'auto',
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Routes_map(){

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAzpsJlFGdNYQLGksUpUzuVcZL5wHsVw5w"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div className='w-[800px] m-auto'>
      <div className='mt-20 flex flex-col items-baseline'>
      <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
        <Link to='/fare'>
            <button className='bg-blue-400 text-white rounded-sm py-1 px-4 mt-8 ml-0'>End</button>
        </Link>
      </div>
    </div>
  ) : <></>
}

export default React.memo(Routes_map)

 
  
