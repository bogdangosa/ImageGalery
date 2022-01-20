import react,{useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Searchbar from '../components/elements/Searchbar';
import ImageCard from '../components/elements/ImageCard';
import {useRouter} from 'next/router';
import Link from 'next/link'

const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;


export const getStaticProps = async () =>{

  const response = await fetch(
    `https://api.pexels.com/v1/curated?page=&per_page=18`,
    {
    headers: {
      Authorization: API_KEY,
    }});
    const data = await response.json();
    //console.log(data);


  return {
    props: {images: data}
  }

}

export default function Home({images}) {
  const router = useRouter()

  const [SearchValue,setSearchValue] = useState('');

  const Search = () =>{
      console.log(SearchValue);
      router.push({
        pathname: '/search/[id]',
        query: { id: SearchValue },
      });
  }

  const openPost = (post_id) =>{
    router.push({
      pathname: '/post/[id]',
      query: { id:  post_id},
    });
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Image Galery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.home}>
        <div className={styles.home_background_grey}></div>
        <img src="home-background.jpg" className={styles.home_background}/>
        
        <Searchbar search_value={SearchValue} setSearchValue={(search_value)=>setSearchValue(search_value)} onSearch={()=>Search()}/>
        <h1 className={styles.home_title}>The best free stock photos, royalty
            free images & videos shared by 
            creators.</h1>
        
      </div>

      <div className={styles.home_image_galery}>
          {
            images.photos.map((imagedata,index)=>{
              return(
                <ImageCard key={index} data={imagedata} onClick={()=>openPost(imagedata.id)}></ImageCard>
              )
            })
          }

        </div>
        <p className={styles.home_load_more} >Load More</p>
    </div>
  )
}
