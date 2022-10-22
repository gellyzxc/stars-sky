import React from 'react';
import styles from "./Moon.module.scss";
import {ReactComponent as IconMoon} from "../../icons/Moon.svg";

const ViewMoon = (props) => {
    const {} = props;

    return (
    <div className={styles._}>
        <IconMoon className={styles.IconMoon} height={72} width={72}/>
    </div>
    );
};

export default ViewMoon;