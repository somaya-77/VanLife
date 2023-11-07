import { Link , NavLink} from 'react-router-dom';

export default function Header() {
  return (
    <header>
    <Link to="/">#VANLIFE</Link>
    <nav>
      <Link to="/host">Host</Link>
      <Link to="/about">About</Link>
      <Link to="/vans">Vans</Link>
    </nav>
  </header>
  )
}
