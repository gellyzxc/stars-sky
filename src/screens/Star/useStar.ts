import { useState, useEffect } from "react";
import { getRandomInt } from "../../functions/function";

export interface IStarViewProps {
  star: any;
  isView: boolean;
}

export interface IStarProps {
  star: any;
}


const UseStar = (props: IStarProps): IStarViewProps => {
const [isView, setIsView] = useState(false);

useEffect(() => {

  return () => {
    setIsView(false);
  }
}, []);

useEffect(() => {
    
    setTimeout(() => {
        setIsView(true);
    }, getRandomInt(1000, 10000));
}, []);

    return {
        star: props.star,
        isView,
    };
};

export default UseStar;