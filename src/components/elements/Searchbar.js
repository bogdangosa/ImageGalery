import react from "react";
import styles from '../../../styles/Searchbar.module.css';

const Searchbar = (props) =>{
    const SetSearchValue = props.setSearchValue;
    const onSearch = props.onSearch;

    return(
        <div className={styles.searchbar}>
            <input className={styles.input_searchbar}  placeholder="Search" value={props.search_value}onChange={(e)=>SetSearchValue(e.target.value)}/>
            <img src="search-icon.svg" className={styles.search_btn} onClick={()=>onSearch()}></img>
        </div>
    )
}

export default Searchbar;