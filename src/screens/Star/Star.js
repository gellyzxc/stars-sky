import React from 'react';
import ViewStar from "./viewStar";
import useStar from "./useStar";

const Star = ({star}) => {
    return (
            <ViewStar {...useStar(star)} />
    );
};

export default Star;