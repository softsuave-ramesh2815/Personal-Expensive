import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import '../stylesheet/mainLayout.css'

const MainLayout = () => {
  return (
    <div className="main-background">
      <div className="top-div"></div>
      <div className="main-div">
        <aside><Navbar /></aside>
        <main className="flex-1 overflow-y-auto"><Outlet /></main>
      </div>
    </div>
  )
}

export default MainLayout
