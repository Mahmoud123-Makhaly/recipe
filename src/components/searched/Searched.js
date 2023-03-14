import React,{useState , useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import "./Searched.css"
const Searched = () => {
    const params = useParams()
    const [Searched , setSearched] = useState([]);
    const getSearched = async(name)=>{
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=52114d8849f549629705e4f8be43cafd&query=${name}`)
    const data = await api.json();
    setSearched(data.results);
  
    }
    useEffect(()=>{getSearched(params.search)} , [params.search]);
 console.log(Searched)
  return (
    <div>
  <div className='row'>
  {
 Searched.length?(
    Searched.map((item)=>{
        return(
        <div className='col-md-6 col-lg-4'>
       
      <Link to={`/details/${item.id}`}>
      <div className="card mb-2"  >
      <div className='overlay'></div>
      <img src={item.image} className="card-img-top" alt={item.title}/>
      <div className="card-body">
        <p className="card-text">{item.title.slice(0 , 20)}</p>
      </div>
      </div>
      </Link>
 
        </div>
        )
            })
 ):(<div class="alert alert-dark" role="alert">
<h5>No Data Found!</h5>
</div>)
}
  </div>
    </div>
  )
}

export default Searched