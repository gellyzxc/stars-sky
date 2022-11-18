import React from 'react';
import ViewStar from "./viewStar";
import useStar, { IStarProps } from "./useStar";

const Star = (props) => {
    return <ViewStar {...useStar(props)} />
};

export default Star;