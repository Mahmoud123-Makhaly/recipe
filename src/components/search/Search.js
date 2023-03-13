import React,{useState} from 'react'
import "./Search.css";
import {BiSearchAlt2} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
const Search = () => {
  const navigate = useNavigate();
  const[Input , setInput] = useState("");
  const handleSubmit = (e)=>{
  e.preventDefault()
    navigate(`/searched/${Input}`)
   }
  return (
<div className='search'>
<form onSubmit={handleSubmit}>
<div class="form-group">
   <input type="text" class="form-control searched-input"  onChange={(e)=>{setInput(e.target.value)}}/>
   <BiSearchAlt2 className='search-icon'/>
 </div>

</form>
</div>
  )
}

export default Search
