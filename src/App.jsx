import { Link, Outlet } from "react-router"
import Navbar from "./components/Navbar/Navbar";



function App() {


  return (
    <>
      <Navbar></Navbar>

      <Outlet></Outlet>
    </>
  )
}

export default App
