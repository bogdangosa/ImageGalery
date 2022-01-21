import React,{useState,useEffect} from "react";
import styles from '../../../styles/Header.module.css';
import Searchbar from "../elements/Searchbar";
import {useRouter} from 'next/router';
import { route } from "next/dist/server/router";

const Header = () =>{
    const [scrollY, setScrollY] = useState(0);
    const [SearchValue,setSearchValue] = useState('');
    const router = useRouter()

    useEffect(()=>{
        const handleScroll = () => {
            setScrollY(window.scrollY);
          };
      
          // just trigger this so that the initial state 
          // is updated as soon as the component is mounted
          // related: https://stackoverflow.com/a/63408216
          handleScroll();
      
          window.addEventListener("scroll", handleScroll);
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };      
    },[]);

    const Search = () =>{
        console.log(SearchValue);
        router.push({
          pathname: '/search/[id]',
          query: { id: SearchValue },
        });
    }

    const goHome = ()=>{
      router.push('/');
    }

    return(
        <div className={styles.header}>
            <img src="pexels-white-logo.png" className={styles.logo_header} onClick={()=>goHome()}/>
            <img src="pexels_logo_mobile.jpg" className={styles.logo_mobile_header} onClick={()=>goHome()}/>
            <Searchbar search_value={SearchValue} setSearchValue={(search_value)=>setSearchValue(search_value)} onSearch={()=>Search()} className={scrollY<400 && router.pathname=='/'?"":styles.header_searchbar}/>
            <p className={styles.headear_about}>About</p>
        </div>
    )

}

export default Header;