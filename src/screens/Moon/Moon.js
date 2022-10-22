import React from 'react';
import ViewMoon from "./viewMoon";
import useMoon from "./useMoon";

const Moon = () => {
    return (
            <ViewMoon {...useMoon()}/>
    );
};

export default Moon;