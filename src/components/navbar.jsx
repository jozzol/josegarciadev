import React, {useState} from "react"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import './navbar.css'




const Navbar = () =>{

    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
      }
    const closeMenu = () => {
        setNavbarOpen(false)
    }


    return(
        <div>
            <nav className="navBar">
            <button onClick={handleToggle}>
                {navbarOpen ? (
                    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                ) : (
                    <FiMenu style={{ color: "#b116e0", width: "40px", height: "40px" }} />
                 )}
            </button>
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`} onClick={() => closeMenu()}>
                    <li ><a href="#home">Home</a></li>
                    <li ><a href="#services" >Services</a></li>
                    <li ><a href="#about" >About</a></li>
                    <li ><a href="#work" >My Work</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;