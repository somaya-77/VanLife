import { Link, NavLink } from 'react-router-dom';

export default function Header() {

  return (
    <header>
      <Link to="/" className="logo">#VANLIFE</Link>
      <nav>
        <NavLink className={({isActive}) => isActive ? "activeStyle" : null} to="/about">About</NavLink>
        <NavLink className={({isActive}) => isActive ? "activeStyle" : null} to="/vans">Vans</NavLink>
        <NavLink className={({isActive}) => isActive ? "activeStyle" : null} to="/host">Host</NavLink>
      </nav>
  </header>
  )
}
