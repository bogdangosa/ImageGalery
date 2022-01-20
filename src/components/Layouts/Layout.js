import React from "react";
import Header from "./Header";
import styles from '../../../styles/Layout.module.css';

const Layout = ({children}) =>{

    return(
        <div className={styles.layout}>
            <Header></Header>
            {children}
        </div>
    )

}

export default Layout;