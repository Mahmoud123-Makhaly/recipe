import React , {useState , useEffect}from 'react'
import { useParams, Link } from 'react-router-dom';
import "./Cussine.css";
import { motion } from 'framer-motion';
const Cussine = () => {
    const [cussine,setCussine] = useState([]);
    const params = useParams()
    console.log(params)
const getCussine = async(name)=>{
    const Api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=adca3df82aab4a66bbb744c2c16dba9a&cuisine=${name}`)
const data = await Api.json();
setCussine(data.results)
}
useEffect(()=>{
    getCussine(params.type)
},[params.type])
  return (
 <div className='row'>
 {
    cussine.length?(
        cussine.map((item)=>{
return(
<div className='col-md-6 col-lg-4'>
<Link to={`/details/${item.id}`}>
<motion.div  animate={{opacity:1}}
initial={{opacity:0}}
exit={{opacity:0}}
transition={{ ease: "easeOut", duration: .5}}>
<div className="card mb-2"  >
<img src={item.image} className="card-img-top" alt={item.title}/>
<div className="card-body">
 <p className="card-text">{item.title.slice(0 , 20)}</p>
</div>
</div>
</motion.div>
</Link>
</div>
)
        })
    ):(null)
 }
 </div>
      
  )
}

export default Cussine
