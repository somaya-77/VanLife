import { NavLink,Link, useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function HostVansDetails() {
  const [currentVan, setCurrentVan] = useState(null);
  const { id } = useParams()
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setCurrentVan(data.vans))
  }, [])

  if(!currentVan){
    return <div className="loading"><h2>Loading...</h2></div>
  }
  return (
    <div className="vanHostDitail ">
      <Link to=".." relative='path'>
        <p className="backLink">&larr; Back to all vans</p>
      </Link>

      <div className="container">
        <div className='detailVan'>
          <div className='flex'>
            <div className='image'>
              <img src={currentVan.imageUrl} />
            </div>

            <div className='title'>
              <button>Simple</button>
              <h2>{currentVan.name}</h2>
              <p><b>${currentVan.price}</b>/day</p>
            </div>
          </div>

          <div className='links'>
            <NavLink className={({ isActive }) => isActive ? "activeStyle" : null} end to=".">Details</NavLink>
            <NavLink className={({ isActive }) => isActive ? "activeStyle" : null} to="pricing">Pricing</NavLink>
            <NavLink className={({ isActive }) => isActive ? "activeStyle" : null} to="photos">Photos</NavLink>
          </div>
          <Outlet context={currentVan} />
          
        </div>
      </div>
    </div>
  )
}
