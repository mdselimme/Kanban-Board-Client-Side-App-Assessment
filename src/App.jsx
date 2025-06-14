import { Outlet } from "react-router"
import Navbar from "./components/Navbar/Navbar"


function App() {


  return (
    <>
      <Navbar></Navbar>
      {/* Home Main Section Start Here  */}

      {/* Home Main Section End Here  */}
      <Outlet></Outlet>
    </>
  )
}

export default App
