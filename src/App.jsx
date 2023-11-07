import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Header from "./components/Header";
import Home from "./pages/Home";
import Host from "./pages/Host";
import About from "./pages/About";
import Vans from "./pages/Vans";
function App() {
  return (
    <>
      <BrowserRouter>
      <header>
        <Link to="/" className="logo">#VANLIFE</Link>
        <nav>
          <Link to="/host">Host</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/host" element={<Host />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
        <footer>© 2022 #VANLIFE</footer>
      </BrowserRouter>
    </>
  )
}

export default App;
