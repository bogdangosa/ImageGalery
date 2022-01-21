import react from "react";
import styles from '../../../styles/ImageCard.module.css';

const ImageCard = ({data,onClick}) =>{
    return(
        <div className={styles.image_card} onClick={()=>onClick()}>
            <div className={styles.image_card_grey_bgd}></div>
            <img src={data.src.large} className={styles.image_card_image}></img>
            <p className={styles.image_card_photographer}>{data.photographer}</p>
            <img src="download_icon.svg" className={styles.card_download_icon}></img>
        </div>
    )
}

export default ImageCard;