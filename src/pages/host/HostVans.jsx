import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])

  console.log(vans)

  const data = vans.map(van => (
    <Link
      to={`/host/vans/${van.id}`}
      key={van.id}
      className="row"
    >
      <div className="img">
        <img src={van.imageUrl} />
      </div>

      <div>
        <p>{van.name}</p>
        <span>${van.price}/day</span>
      </div>

    </Link>
  ));

  return (
    <div className="hostVans style">
      <h2>Your listed vans</h2>
      <div className="container">

        {vans.length > 0 ? data : <div className="loading"><h2>Loading...</h2></div>}
      </div>
    </div>
  )
}


