
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function VansDetails() {
  const [currentVan, setCurrentVan] = useState(null);
  
  const { id } = useParams()
  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then(res => res.json())
      .then(data => setCurrentVan(data.vans))
  }, [])

  if (!currentVan) {
    return <div className="loading"><h2>Loading...</h2></div>
  }
  return (
    <div className="vanHostDitail ">
      <div className='detail'>

        <Link to=".." relative='path'>
          <p className="backLink">&larr; Back to all vans</p>
        </Link>

        <div className="detail-container">
          <div>
            <div>
              <div>
                <img src={currentVan.imageUrl} />
              </div>

              <div className='title'>
                <button className={`van-type ${currentVan.type} selected`}>{currentVan.type}</button>
                <h2>{currentVan.name}</h2>
                <p><b>${currentVan.price}</b>/day</p>
                <p>{currentVan.description}</p>
              </div>

              <span>Rent this van</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
