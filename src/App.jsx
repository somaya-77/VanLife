import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";
import Layout from "./pages/Layout";
import HostLayout from "./pages/HostLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Vans from "./pages/vans/Vans";
import VansDetails from "./pages/vans/VansDetails";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostVans from "./pages/host/HostVans";
import HostVansDetails from "./pages/host/HostVansDetails";
import Pricing from "./pages/host/Pricing";
import Photos from "./pages/host/Photos";
import Describ from "./pages/host/Describ";

import Error from "./pages/Error";
import '../server';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="login" element={<Login />} />
    <Route path="about" element={<About />} />
    <Route path="vans" element={<Vans />}  />
    <Route path="vans/:id" element={<VansDetails />} />

    <Route path="host" element={<HostLayout />} >
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="vans" element={<HostVans />} />
      <Route path="vans/:id" element={<HostVansDetails />} >
        <Route index element={<Describ />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="photos" element={<Photos />} />
      </Route>
      <Route path="reviews" element={<Reviews />} />
    </Route>
    <Route path="*" element={<Error />} />
  </Route>
))

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
