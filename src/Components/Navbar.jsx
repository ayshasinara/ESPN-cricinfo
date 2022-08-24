import React from 'react';
import styles from "./Navbar.module.css"
import { Link, useNavigate } from "react-router-dom";
import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue,
  } from "@chakra-ui/react"

const Navbar = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen1, onOpen1, onClose1 } = useDisclosure();
    const navigate= useNavigate()
  return (
    <div className={styles.nav}>
        <div className={styles.navLeft}>
        
            <div className={styles.logo}>
                <Link className={styles.link} to={"/"}>
              <img  className={styles.logimg} src="https://wassets.hscicdn.com/static/images/logo.png" alt="logo" />
              </Link>
            </div>
            <div className={styles.item}>
          {/*  */}
                    <nav role="navigation">
            <ul>
                <li><a href="#">One</a>
                <ul class="dropdown">
                    <li><a href="#">Sub-1</a></li>
                    <li><a href="#">Sub-2</a></li>
                    <li><a href="#">Sub-3</a></li>
                </ul></li>
                <li><a href="#">Two</a>
                <ul class="dropdown">
                    <li><a href="#">Sub-1</a></li>
                    <li><a href="#">Sub-2</a></li>
                    <li><a href="#">Sub-3</a></li>
                </ul>
                </li>
                <li><a href="#">Three</a>
                <ul class="dropdown">
                    <li><a href="#">Sub-1</a></li>
                    <li><a href="#">Sub-2</a></li>
                    <li><a href="#">Sub-3</a></li>
                </ul></li>
            </ul>
            </nav>
          {/*  */}
            </div>
        </div>
        <div className={styles.navRight}>
            <div>
                <img src="https://wassets.hscicdn.com/static/images/fantasy-home.png" alt="fantacy" />
                <h3>Fantacy</h3>
            </div>
            <div>
            <i style={{color:"white"}} class="fa-solid fa-moon fa-2x"></i>
            </div>
            <div className={styles.searchbar}>
            <i class="fa-solid fa-magnifying-glass "></i>
            <input type="text" placeholder='Search players, teams or series' />
            </div>
        </div>
    </div>
  )
}

export default Navbar