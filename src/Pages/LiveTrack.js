import React, { useEffect } from 'react';
import { useState } from 'react';


function LiveTrack() {
    const [long, setLong] = useState("");
    const [lat, setLat] = useState("");
    const apiKey = 'AIzaSyAOlGVaAlNnI26UtG-nnLhxdzg4_so-bzw';
    useEffect(() => getLocation(), []);

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
    return (
        <div>

            <iframe
                title="Map"
                src={`https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${lat},${long}&zoom=15`}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                width="100%"
                height="200%"
            ></iframe>
        </div>
    );
}

export default LiveTrack;
