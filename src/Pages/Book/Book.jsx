import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack,
    IconButton,
    Input,
    SkeletonText,
    Text,
} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useBook } from "../../Context/BookContext";


import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
} from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import { host } from "../../constants";



const center = { lat: 48.8584, lng: 2.2945 };

function Book() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyAOlGVaAlNnI26UtG-nnLhxdzg4_so-bzw",
        libraries: ["places"],
    });

    const { setCurrentBookingFunction } = useBook();

    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [rides, setrides] = useState([])

    const toggleVisibility = () => {
        setIsVisible(true);
    };

    const [map, setMap] = useState(/** @type google.maps.Map */(null));
    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [distance, setDistance] = useState("");
    const [duration, setDuration] = useState("");

    const getRides = async () => {
        try {

            if (distance) {
                const response = await axios.post(`${host}/ride/v1/getRides`, {
                    origin: originRef.current.value,
                    destination: destiantionRef.current.value,
                    distance: distance,
                    duration: duration,
                    kilometer: distance,
                });

                if (response.status === 200) {
                    setrides(response.data.data);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }



    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef();
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef();

    if (!isLoaded) {
        return <SkeletonText />;
    }

    async function calculateRoute() {
        if (originRef.current.value === "" || destiantionRef.current.value === "") {
            return;
        }
        const directionsService = new google.maps.DirectionsService();
        const results = await directionsService.route({
            origin: originRef.current.value,
            destination: destiantionRef.current.value,
            travelMode: google.maps.TravelMode.DRIVING,
        });
        setDirectionsResponse(results);
        setDistance(results.routes[0].legs[0].distance.text);
        setDuration(results.routes[0].legs[0].duration.text);
        console.log(results);

        getRides();


        toggleVisibility();
    }

    const handleDetailNavigate = (ride) => {

        setCurrentBookingFunction({
            origin: originRef.current.value,
            destination: destiantionRef.current.value,
            duration: duration,
            kilometer: distance.split(" ")[0],
        })

        console.log({
            origin: originRef.current.value,
            destination: destiantionRef.current.value,
            duration: duration,
            kilometer: distance.split(" ")[0],

        })

        navigate(`/details/${ride.rideId}`, { state: { ride } });
    }


    function clearRoute() {
        setDirectionsResponse(null);
        setDistance("");
        setDuration("");
        originRef.current.value = "";
        destiantionRef.current.value = "";
    }

    return (
        <div>
            <Flex
                position="relative"
                flexDirection="column"
                alignItems="center"
                h="100vh"
                w="100vw"
            >
                <Box position="absolute" left={0} top={0} h="100%" w="100%">
                    {/* Google Map Box */}
                    <GoogleMap
                        center={center}
                        zoom={15}
                        mapContainerStyle={{ width: "100%", height: "100%" }}
                        options={{
                            zoomControl: false,
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false,
                        }}
                        onLoad={(map) => setMap(map)}
                    >
                        <Marker position={center} />
                        {directionsResponse && (
                            <DirectionsRenderer directions={directionsResponse} />
                        )}
                    </GoogleMap>
                </Box>
                <Box
                    p={4}
                    borderRadius="lg"
                    m={4}
                    bgColor="white"
                    shadow="base"
                    minW="container.base"
                    zIndex="1"
                >
                    <HStack spacing={2} justifyContent="space-between">
                        <Box flexGrow={1}>
                            <Autocomplete>
                                <Input
                                    type="text"
                                    placeholder="Origin"
                                    ref={originRef}
                                    className="w-fulll"
                                />
                            </Autocomplete>
                        </Box>
                        <Box flexGrow={1}>
                            <Autocomplete>
                                <Input
                                    type="text"
                                    placeholder="Destination"
                                    ref={destiantionRef}
                                />
                            </Autocomplete>
                        </Box>
                    </HStack>
                    <ButtonGroup className="mt-4">
                        <Button colorScheme="pink" type="submit" onClick={calculateRoute}>
                            Calculate Route
                        </Button>
                        <IconButton
                            aria-label="center back"
                            icon={<FaTimes />}
                            onClick={clearRoute}
                        />
                    </ButtonGroup>
                    <HStack spacing={4} mt={4} justifyContent="space-between">
                        <Text>Distance: {distance} </Text>
                        <Text>Duration: {duration} </Text>
                        <IconButton
                            aria-label="center back"
                            icon={<FaLocationArrow />}
                            isRound
                            onClick={() => {
                                map.panTo(center);
                                map.setZoom(15);
                            }}
                        />
                    </HStack>
                </Box>
            </Flex>

            <div className="">
                <div
                    className={`fixed bottom-0 left-0 w-full h-1/2 rounded-t-3xl bg-gray-50 bg-opacity-90 transpa text-black z-10 overflow-y-auto mx-auto transition-transform duration-300 ease-in-out ${isVisible ? "transform translate-y-0" : "transform translate-y-full"
                        }`}
                >
                    <div className="p-6">
                        <div className="flex flex-wrap justify-between">
                            <div>
                                <h1 className="text-lg font-semibold">Select A Cab</h1>
                            </div>

                            <div>
                                <button
                                    className="-mt-2 bg-gray-700 text-white px-4 py-2 rounded-md"
                                    onClick={toggleVisibility}
                                >
                                    Close
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col flex-wrap  justify-center items-center">



                            {
                                rides.map((ride) => (
                                    <div onClick={() => {
                                        handleDetailNavigate(ride);
                                    }} className="mt-6 bg-white p-6 rounded-lg w-full flex gap-2 flex-wrap flex-row ">
                                        <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png" className="w-1/4" alt="" />
                                        <div className="flex flex-row justify-between w-3/5">
                                            <div className="flex flex-col justify-center items-center">
                                                <span>PRIME SUV</span>
                                                <span>4 Seats</span>
                                            </div>
                                            <div className="mx-2 text-right">₹ {ride.Fare}</div>


                                        </div>
                                    </div>

                                ))
                            }









                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
}

export default Book;