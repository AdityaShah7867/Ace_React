import { useRef, useState } from 'react'
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'

const center = { lat: 48.8584, lng: 2.2945 }

function Book() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAOlGVaAlNnI26UtG-nnLhxdzg4_so-bzw',
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */(null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')

  const originRef = useRef()
  const destinationRef = useRef()

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  async function calculateRoute() {
    if (!originRef.current.value || !destinationRef.current.value) {
      return
    }

    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    })

    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destinationRef.current.value = ''
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full h-full absolute top-0 left-0">
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-lg m-4">
        <div className="flex justify-between space-x-4">
          <Autocomplete>
            <input
              type="text"
              placeholder="Origin"
              ref={originRef}
              className="w-full p-2 border rounded"
            />
          </Autocomplete>
          <Autocomplete>
            <input
              type="text"
              placeholder="Destination"
              ref={destinationRef}
              className="w-full p-2 border rounded"
            />
          </Autocomplete>
          <div className="flex items-center space-x-2">
            <button
              className="bg-pink-500 text-white px-4 py-2 rounded"
              onClick={calculateRoute}
            >
              Calculate Route
            </button>
            <button
              className="text-red-500"
              onClick={clearRoute}
            >
              <FaTimes />
            </button>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <p>Distance: {distance}</p>
          <p>Duration: {duration}</p>
          <button
            className="text-blue-500"
            onClick={() => {
              map.panTo(center)
              map.setZoom(15)
            }}
          >
            <FaLocationArrow />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Book
