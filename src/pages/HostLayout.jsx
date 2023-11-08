import './host/styleHost.css'
import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
  return (
    <div>
      <nav  className="hostLayout">
        <NavLink className={({isActive}) => isActive ? "activeStyle" : null} to="/host" end>Dashboard</NavLink>
        <NavLink className={({isActive}) => isActive ? "activeStyle" : null} to="/host/income">Income</NavLink>
        <NavLink className={({isActive}) => isActive ? "activeStyle" : null} to="/host/vans">Vans</NavLink>
        <NavLink className={({isActive}) => isActive ? "activeStyle" : null} to="/host/reviews">Reviews</NavLink>
      </nav>

      <main className="main-hostLayout">
        <Outlet />
      </main>
    </div>
  )
}
