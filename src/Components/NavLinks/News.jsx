import React, {useEffect, useState} from 'react'
import Card from '../Widget/Card'

function News() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
      const fetchPost = async () => {
         const response = await fetch(
          'https://newsapi.org/v2/everything?q=stockmarket&apiKey=675abaf9746748c399017b75b522fa1a'
         );
         const data = await response.json();
         const feed = data.articles;
        //  console.log(data);
         
         
         setPosts(feed);
      };
      fetchPost();
   }, []);

  return (
    <>
    <div className='min-h-screen flex flex-wrap justify-around mb-5'>
      {posts?.map((value)=>(
        <div key={value.url} className='flex justify-around mt-5 '>
        <Card 
        
        imageUrl={value.urlToImage}   
      
        title= {value.title?.slice(0,80)}

        description = {value.content?.slice(0,200)}

        linkUrl = {value.url}
        />
      </div>
      ))}
    </div>
    </>
  )
}

export default News










