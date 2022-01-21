import react,{useState,useEffect} from "react";
import styles from '../../../../styles/Post.module.css'
import { useRouter } from 'next/router';
const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;


const getSearchedImage = async(search_value)=>{
    const response = await fetch(
        `https://api.pexels.com/v1/photos/${search_value}`,
        {
        headers: {
          Authorization: API_KEY,
        }});
    const data = await response.json()
    return data;
}


export const getServerSideProps = async (context) =>{
    console.log(context.query.id);

    const data = await getSearchedImage(context.query.id)
    console.log(data);
    
    
    return {
        props: {imagedata: data}
      }
}

const Post = ({imagedata}) =>{
    const [imageMode,setimageMode] = useState("landscape");
    const router = useRouter();
    const { id } = router.query;


    return(
        <div className={styles.post}>
            <div className={styles.post_top_bar}>
            <p className={styles.post_photographer} onClick={()=>console.log(imageMode)}>{imagedata.photographer}</p>
            <div className={styles.post_image_modes}>
                <p className={imageMode=="landscape"?styles.post_image_mode+' '+styles.selected_mode:styles.post_image_mode} onClick={()=>setimageMode("landscape")}>landscape</p>
                <p className={imageMode!="landscape"?styles.post_image_mode+' '+styles.selected_mode:styles.post_image_mode} onClick={()=>setimageMode("portrait")}>portrait</p>
            </div>
            </div>
            {imageMode=="landscape"?<img src={imagedata.src.landscape}></img>:
            <img src={imagedata.src.portrait}></img>}
        </div>
    )
}

export default Post;