import { useState, useEffect } from "react";
import { getRandomInt, useWindowDimensions } from "../../functions/function";

export interface ISkyProps {
    stars: any[];
    changeSky: (event: any) => void;
}

const UseSky = (): ISkyProps => {

    const { height, width } = useWindowDimensions();

    const [stars, setStars] = useState([]);

    useEffect(() => {
        return () => {
            setStars([]);
        }
    }, []);

    useEffect(() => {
        const newStars: any[] = stars;
        const countStars = getRandomInt(0, 150);

        for (let i = 0; i < countStars; i++) {
            const star: any = {
                left: getRandomInt(0, width - 12),
                top: getRandomInt(0, height - 12),
            }
            newStars.push(star)
        }

        setStars([...(newStars as never)])
    }, []);

    const changeSky = (event: any): void => {
        const newStars: any[] = stars;

        const star: any = {
            left: event.pageX,
            top: event.pageY,
        }

        newStars.push(star);

        setStars([...(newStars as never)])
    }

    return (
        {
            stars,
            changeSky,
        }
    );
};

export default UseSky;