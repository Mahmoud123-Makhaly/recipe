import React, { useState,useEffect } from 'react';
import "./Veggie.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
const Veggie = () => {
  const [veggie , setVeggie] = useState([]);
  const getVeggie = async()=>{
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=adca3df82aab4a66bbb744c2c16dba9a&number=9`)
 const data = await api.json();
 setVeggie(data.recipes);
 console.log(data.recipes)
  };
  useEffect(() => {
    getVeggie()
  }, [])
  return (
    <div className='veggie'>
      <h4 className='mb-3'>Our Vegetarian Picks</h4>
      <Splide options={{
        perPage: 4,
        arrows:false,
        pagination:false,
        gap:"2em",
        breakpoints: {
          991: {
            perPage: 2,
          },
        }
      }}>
 {
  veggie.length?(
    veggie.map((item)=>{
return(
  <SplideSlide>
<Link to={`/details/${item.id}`}>
<div className="card"  >
<div className='overlay'></div>
<img src={item.image} className="card-img-top" alt={item.title}/>
<div className="card-body">
  <p className="card-text">{item.title.slice(0 , 20)}</p>
</div>
</div>
</Link>
</SplideSlide>
)
    })
  ):(null)
}
</Splide>
     </div>
  )
}

export default Veggie