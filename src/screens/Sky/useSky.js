import { useState, useEffect } from "react";
import { getRandomInt, useWindowDimensions } from "../../functions/function";

const UseSky = () => {

    const { height, width } = useWindowDimensions();

    const [stars, setStars] = useState([]);

    useEffect(() => {
        return () => {
            setStars([]);
        }
    }, []);

    useEffect(() => {
        const newStars = stars;
        const countStars = getRandomInt(0, 150);

        for (let i = 0; i < countStars; i++) {
            const star = {
                left: getRandomInt(0, width - 12),
                top: getRandomInt(0, height - 12),
            }
            newStars.push(star)
        }

        setStars([...newStars]);
    }, []);

    const changeSky = (event) => {
        const newStars = stars;

        const star = {
            left: event.pageX,
            top: event.pageY,
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