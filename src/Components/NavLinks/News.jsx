import React, {useEffect, useState} from 'react'
import Card from '../Widget/Card'

function News() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
      const fetchPost = async () => {
         const response = await fetch(
          'https://finnhub.io/api/v1/news?category=general&token=cremcchr01qnd5cvr330cremcchr01qnd5cvr33g'
         );
         const data = await response.json();
        //  const feed = data.articles;
        //  console.log(data);
         
         
         setPosts(data);
      };
      fetchPost();
   }, []);

  return (
    <>
    <div className='min-h-screen flex flex-wrap justify-around mb-5'>
      {posts?.map((value)=>(
        <div key={value.id} className='flex justify-around mt-5 '>
        <Card 
        
        imageUrl={value.image}   
      
        title= {value.headline?.slice(0,80)}

        description = {value.summary?.slice(0,200)}

        linkUrl = {value.url}
        />
      </div>
      ))}
    </div>
    </>
  )
}

export default News











