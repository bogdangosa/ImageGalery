import react from "react";
import { useRouter } from 'next/router';
import ImageCard from "../../../components/elements/ImageCard";
import styles from '../../../../styles/Search.module.css';
const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

const getSearchedImages = async(search_value)=>{
    const response = await fetch(
        `https://api.pexels.com/v1/search?query=${search_value}&per_page=18`,
        {
        headers: {
          Authorization: API_KEY,
        }});
    const data = await response.json()
    return data;
}

export const getServerSideProps = async (context) =>{
    console.log(context.query.id);

    const data = await getSearchedImages(context.query.id)
    console.log(data);
    
    
    return {
        props: {images: data}
      }
}

const SearchId = ({images}) =>{
    const router = useRouter();
    const { id } = router.query;

    
  const openPost = (post_id) =>{
    router.push({
      pathname: '/post/[id]',
      query: { id:  post_id},
    });
  }
  
    return(
        <div className={styles.SearchId}>
            <p className={styles.search_id_title}>{id} Pictures</p>
            
            <div className={styles.searchid_image_galery}>
            {
                images.photos.map((imagedata,index)=>{
                return(
                    <ImageCard key={index} data={imagedata} onClick={()=>openPost(imagedata.id)}></ImageCard>
                )
                })
            }

        </div>

        </div>
    )

}

export default SearchId;