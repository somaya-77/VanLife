import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {getVans} from '../../api';
import "./styleVan.css";


export default function Vans() {
  const [searchParams] = useSearchParams();
  const [vans, setVans] = useState([]);


  const typeFilter = searchParams.get("type");

  useEffect(() => {
    async function loadVans(){
      const data = await getVans()
      setVans(data)
    }
    loadVans()
  }, []);

  const displayedCharacters = typeFilter
    ? vans.filter(van => van.type.toLowerCase() === typeFilter)
    : vans;

  const vanElement = displayedCharacters.map(van => (
    <div key={van.id} className="contain-van">
      <Link to={van.id}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <div className="title-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
      </Link>

    </div>
  ))

  return (
    <div className="style">
      <div className="vanMain">
        <div className="title-van">

          <h1>Explore our van options</h1>
          <div className="filtering">
            <div className="btn">
              <Link to="?type=simple" className= {typeFilter === "simple" ? "selected" : ""}>Simple</Link>
              <Link to="?type=luxury" className={typeFilter === "luxury" ? "selected" : ""}>Luxury</Link>
              <Link to="?type=rugged" className={typeFilter === "rugged" ? "selected" : ""}>Rugged</Link>
            </div>
            {typeFilter ? (<Link className="clear" to=".">Clear filters</Link>) : null}
          </div>
        </div>
        <div className="van-list">
          {vans.length > 0 ? vanElement : <h1>Loading...</h1>}
        </div>
        {/* <Outlet /> */}
      </div>
    </div>
  )
}
