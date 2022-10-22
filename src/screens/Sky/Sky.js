import React from 'react';
import ViewSky from "./viewSky";
import useSky from "./useSky";

const Sky = () => {
    return (
            <ViewSky {...useSky()}/>
    );
};

export default Sky;