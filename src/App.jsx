import { Link, Outlet } from "react-router"
import Navbar from "./components/Navbar/Navbar";
import DndMultiBackendProvider from "./components/DndMultiBackendProvider/DndMultiBackendProvider";




function App() {


  return (
    <div className="bg-amber-50 min-h-screen">
      <DndMultiBackendProvider>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </DndMultiBackendProvider>
    </div>
  )
}

export default App
