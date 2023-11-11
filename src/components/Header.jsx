import { Link, NavLink } from 'react-router-dom';

export default function Header() {

  return (
    <header>
      <Link to="/" className="logo">#VANLIFE</Link>
      <nav>
        <NavLink className={({isActive}) => isActive ? "activeStyle" : null} to="/about">About</NavLink>
        <NavLink className={({isActive}) => isActive ? "activeStyle" : null} to="/vans">Vans</NavLink>
        <NavLink className={({isActive}) => isActive ? "activeStyle" : null} to="/host">Host</NavLink>
        <NavLink className={({isActive}) => isActive ? "activeStyle" : null} to="/login">
          <img src='https://github.com/scrimba/learn-react-router-6/blob/main/05%20-%20Actions%20and%20Protected%20Routes/02%20-%20Note%20from%20the%20future%20-%20importing%20image%20assets%20in%20Vite/assets/images/avatar-icon.png?raw=true'/>
        </NavLink>
      </nav>
  </header>
  )
}
