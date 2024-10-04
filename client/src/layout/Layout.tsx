import { Outlet } from "react-router-dom"
import { Footer, NavBar, WhatsApp } from "../components"
import './layout.scss';

export const Layout = () => {
    
    return (
      <>
          <NavBar />
          <div className="App">
              <Outlet/>
          </div>
          <Footer/>
            <WhatsApp/>
      </>
    )
  }
  