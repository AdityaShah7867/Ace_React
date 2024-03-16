import React from "react";
import { MdMessage } from "react-icons/md";
import { useEffect, useState } from "react";
import { useBook } from "../../Context/BookContext";
import axios from "axios";
import { host } from "../../constants";
import { useParams, useNavigate } from 'react-router-dom'

const Details = () => {


    const { currentBooking } = useBook();
    const [long, setLong] = useState("");
    const [lat, setLat] = useState("");
    const apiKey = 'AIzaSyAOlGVaAlNnI26UtG-nnLhxdzg4_so-bzw';
    useEffect(() => getLocation(), []);




    const navigate = useNavigate();
    const { rideId } = useParams();

    console.log(
        'rideId', rideId);
    const showPosition = async (position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        setLat(latitude);
        setLong(longitude);

        // handleSubmit();
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Error");
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const bookCab = async () => {
        try {
            const response = await axios.put(`${host}/ride/v1/joinRide/${rideId}`, {}, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("auth")}`
                }
            });

            if (response.status === 200) {
                console.log(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="min-h-screen bg-white">
            <div className="flex justify-center items-center font-bold mt-10">
                <p>RESERVATION REQUEST</p>
            </div>
            <div className=" bg-gray-200 w-30  mt-8 flex justify-center items-center rounded-xl mx-4">
                <iframe
                    src={`https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${lat},${long}&zoom=15`}
                    width={375}
                    height={200}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"

                />
            </div>
            <div className="mt-3 ml-3 p-3 text-gray-400 text-sm">{new Date().toLocaleString()}</div>


            <div className="flex justify-between gap-4 m-8 font-bold">
                <div>
                    From:
                </div>
                <div>
                    {
                        currentBooking ? currentBooking.origin : 'loading...'
                    }
                    <hr className="mt-4" />
                </div>
            </div>

            <div className="flex justify-between gap-4 m-8 font-bold border-b-2  border-gray-400 mt-2">
                <div>
                    To:
                </div>
                <div>
                    {
                        currentBooking ? currentBooking.destination : 'loading...'
                    }

                </div>

            </div>

            <div className="bg-gray-500 m-3 p-3 text-white rounded-xl">
                <p>Fare as per Members:</p>
                <br />
                <p>1 person : ₹ 500</p>
                <p>1 person : ₹ 500</p>
                <p>1 person : ₹ 500</p>


            </div>

            <div className="flex flex-wrap ml-2 mt-12 p-2">

                <div>
                    <img src="https://avatars.githubusercontent.com/u/121731399?v=4" className="w-16 h-16 rounded-full" alt="" />
                </div>
                <div className="font-bold ml-2">
                    Aditya Shah <br />
                    <p className="font-medium text-sm">

                        start : 5.0 <br />
                        13feedbacks
                    </p>
                </div>
                <div onClick={() => {
                    navigate(`/chat/${rideId}`);
                }} className="ml-8 mt-2 border-4 rounded-full p-4 text-xl">
                    <MdMessage />

                </div>

                <div className="mt-2 ml-4 border-2 border-gray-200 rounded-lg p-2 ">
                    See Profile
                </div>

            </div>

            <div onClick={bookCab} className=" font-bold text-lg mt-8 flex justify-center mx-auto items-center  bg-violet-600 p-4 w-10/12 rounded-lg text-white">
                BOOK A CAB
            </div>



        </div>
    );
};

export default Details;