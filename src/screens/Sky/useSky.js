import React from 'react';
import {useState} from "react";

const UseSky = () => {

    const [stars, setStars] = useState([]);
    const changeSky = (coords) => {
        const newStars = stars;

        const star = {
            x: coords.pageX,
            y: coords.pageY
        }

        newStars.push(star);

        setStars([...newStars])
    }

    return (
        {
            stars,
            changeSky,
        }
    );
};

export default UseSky;