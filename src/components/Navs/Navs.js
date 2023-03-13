import React from 'react'
import { GiKnifeFork } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import "./Navs.css";
const Navs = () => {
  return (
 
<Link to="/" style={{textDecoration:"none"}}>
<div className='Navs'>
<GiKnifeFork/>
<span>Delcious</span>
</div>


</Link>
 
  )
}

export default Navs