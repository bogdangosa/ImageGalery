import React from "react";
import styles from '../../../styles/Header.module.css';

const Header = () =>{

    return(
        <div className={styles.header}>
            <img src="pexels-white-logo.png" className={styles.logo_header}/>
            <p>About</p>
        </div>
    )

}

export default Header;