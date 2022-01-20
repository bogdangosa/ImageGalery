import react from "react";
import styles from '../../../../styles/Post.module.css'
import { useRouter } from 'next/router';
const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

const Post = () =>{
    const router = useRouter();
    const { id } = router.query;

    return(
        <div className={styles.post}>
            <p>{id}</p>
        </div>
    )
}

export default Post;