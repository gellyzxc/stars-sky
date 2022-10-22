import React from 'react';
import ViewStar from "./viewStar";
import useStar from "./useStar";

const Star = () => {
    return (
            <ViewStar {...useStar()} />
    );
};

export default Star;