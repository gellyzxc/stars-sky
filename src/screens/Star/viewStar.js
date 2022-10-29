import React from 'react';
import styles from "./Star.module.scss";
import { ReactComponent as IconStar } from "../../icons/Star.svg";

const ViewStar = (props) => {
    const { star, isView } = props;
    return (
        isView && (
                <div className={styles._} style={
                    {
                        top: star.top,
                        left: star.left,
                    }
                }>
                    {/* <IconStar width={24} height={24} className={styles.IconStar}/> */}
                </div>
        )
    );
};

export default ViewStar;