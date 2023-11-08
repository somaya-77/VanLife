import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
export default function Vans() {
  const [vans, setVans] = useState([]);

    useEffect(() => {
      fetch("/api/vans")
          .then(res => res.json())
          .then(data => setVans(data.vans))
  }, [])

  console.log(vans)

  return (
    <div>
      
      <Outlet />
    </div>
  )
}
