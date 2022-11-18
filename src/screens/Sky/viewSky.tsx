import React, {useEffect, useState} from 'react';
import {Moon} from "../Moon";
import styles from "./Sky.module.scss"
import {Star} from "../Star";
import { ISkyProps } from './useSky';

const ViewSky = (props: ISkyProps) => {
    const {
        stars,
        changeSky
    } = props;

    // const [coords, setCoords] = useState({x: 0, y: 0});

    // const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});

    // useEffect(() => {
    //     // 👇️ get global mouse coordinates
    //     const handleWindowMouseMove = event => {
    //         setGlobalCoords({
    //             x: event.screenX,
    //             y: event.screenY,
    //         });
    //     };
    //     window.addEventListener('mousemove', handleWindowMouseMove);

    //     return () => {
    //         window.removeEventListener('mousemove', handleWindowMouseMove);
    //     };
    // }, []);

    // const handleMouseMove = event => {
    //     setCoords({
    //         x: event.clientX - event.target.offsetLeft,
    //         y: event.clientY - event.target.offsetTop,
    //     });
    // };


    // onMouseMove={handleMouseMove}
    
    return (
        <div className={styles._} onClick={event => changeSky(event)}>
            <Moon />
            {stars.map((star, index) => (
                    <Star star={star} key={'star_' + index} />
            ))}
        </div>
    );
};

export default ViewSky;