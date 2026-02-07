import '../stylesheet/Navbar.css'
import { menuBar } from '../models/menu.config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CubeIcon from "./CubeIcon";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='menu-bar'>
        <div className="header">
           <div className='logo'>
            <CubeIcon size={50} color="#7366E4" />
            <span className='title'>Personal</span>
           </div>
            <div className='title bottom'>Expensive</div>
        </div>
       <nav className="list-menu">
        {menuBar.map((menu) => (
          <NavLink
            key={menu.id}
            to={menu.path}
            className={({ isActive }) =>
              isActive ? "menu-list active" : "menu-list"
            }
          >
            <FontAwesomeIcon
              icon={menu.icon}
              color={menu.iconColor}
              className="menu-icon"
              size='2x'
            />
            <span>{menu.label}</span>
          </NavLink>
        ))}
      </nav>
      </div>
    </>
  )
}

export default Navbar