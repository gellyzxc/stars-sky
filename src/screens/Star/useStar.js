import { useState, useEffect } from "react";
import { getRandomInt } from "../../functions/function";

const UseStar = (star) => {
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
        star,
        isView,
    };
};

export default UseStar;