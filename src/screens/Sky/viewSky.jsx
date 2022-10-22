import React, {useEffect, useState} from 'react';
import {Moon} from "../Moon";
import styles from "./Sky.module.scss"
import {Star} from "../Star";

const ViewSky = (props) => {
    const {
        stars,
        changeSky
    } = props;

    const [coords, setCoords] = useState({x: 0, y: 0});

    const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});

    useEffect(() => {
        // 👇️ get global mouse coordinates
        const handleWindowMouseMove = event => {
            setGlobalCoords({
                x: event.screenX,
                y: event.screenY,
            });
        };
        window.addEventListener('mousemove', handleWindowMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleWindowMouseMove);
        };
    }, []);

    const handleMouseMove = event => {
        setCoords({
            x: event.clientX - event.target.offsetLeft,
            y: event.clientY - event.target.offsetTop,
        });
    };
    //

    return (
        <div className={styles._} onMouseMove={handleMouseMove} onClick={
            (coords) => changeSky(coords)
        }>
            <Moon />
            {stars.map((star, index) => (
                <div style={{marginLeft: star.x - 12 + 'px', top: star.y - 12 + 'px'}} className={styles.star}>
                    <Star key={'star_' + index} />
                </div>
            ))}
        </div>
    );
};

export default ViewSky;