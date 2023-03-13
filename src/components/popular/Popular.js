import React , {useEffect , useState} from 'react'
import "./Popular.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
  const Popular = () => {
    const [popular , setpopular] = useState([]);
    const getPopular = async()=>{
      const api = await fetch(` https://api.spoonacular.com/recipes/random?apiKey=adca3df82aab4a66bbb744c2c16dba9a&number=9&tags=vegetarian`)
 
   const data = await api.json();
   setpopular(data.recipes);
     };
    useEffect(() => {
      getPopular()
    }, [])
  return (
    <div className='popular'>
    <h4 className='mb-3'>Popular Picks</h4>
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
popular.length?(
  popular.map((item)=>{
return(
<SplideSlide>
<Link to={`details/${item.id}`}>
 
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
export default Popular