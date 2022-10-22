import React from 'react';
import styles from "./Star.module.scss";
import {ReactComponent as IconStar} from "../../icons/Star.svg";

const ViewStar = (props) => {
    const {} = props;
    return (
    <div className={styles._}>
        <IconStar width={24} height={24} className={styles.IconStar}/>
    </div>
    );
};

export default ViewStar;