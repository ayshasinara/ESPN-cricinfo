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

    const handleLiveScore=()=>{
        navigate("/livescores")
    }

    const handleVideo= ()=>{
        navigate("/videos")
    }

    const handleSeries=()=>{
        navigate("/series")
    }

    const handleTeams=()=>{
        navigate("/teamspage")
    }

    const handleNews=()=>{
        navigate("/news")
    }

    const handleFeatures=()=>{
        navigate("/features")
    }
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
                <li style={{backgroundColor:"#04c8f5"}} onClick={handleLiveScore} ><a style={{ color:"white"}}  >Live Scores</a>
                <ul style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", width:"200px", zIndex:3}}  class="dropdown">
                    <li  ><a style={{ width:"300px"}}  href="#">Live Scores Home</a></li>
                    <li><a href="#">Week view</a></li>
                    <li><a href="#">Month view</a></li>
                    <li><a href="#">Season View</a></li>
                    <li><a href="#">International calender</a></li>
                    <li><a href="#">Desktop Scoreboard</a></li>
                </ul></li>
                <li style={{backgroundColor:"#04c8f5"}} onClick={handleSeries}><a style={{ color:"white"}} >Series</a>
                <ul style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", width:"200px"}} class="dropdown">
                    <li><a href="#">Asia Cup</a></li>
                    <li><a href="#">Eng vs SA</a></li>
                    <li><a href="#">County Div1</a></li>
                    <li><a href="#">Maharaja T20</a></li>
                    <li><a href="#">6IXTy</a></li>
                    <li><a href="#">Womens T20</a></li>
                </ul>
                
                </li>
                <li style={{backgroundColor:"#04c8f5"}} onClick={handleTeams}><a style={{ color:"white"}} >Teams</a>
                <ul style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", width:"200px"}} class="dropdown">
                    <li><a href="#">Australia</a></li>
                    <li><a href="#">Bangladesh</a></li>
                    <li><a href="#">England</a></li>
                    <li><a href="#">India</a></li>
                    <li><a href="#">New Zealand</a></li>
                    <li><a href="#">Pakistan</a></li>
                    <li><a href="#">South Africa</a></li>
                    <li><a href="#">Sri Lanka</a></li>
                    <li><a href="#">West indies</a></li>
                </ul></li>
                <li style={{backgroundColor:"#04c8f5"}} onClick={handleNews}><a style={{ color:"white"}} >News</a>
                <ul style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", width:"200px"}} class="dropdown">
                    <li><a href="#">News Home</a></li>
                    <li><a href="#">Future of ODI's</a></li>
                    <li><a href="#">Ball Tempering</a></li>
                    <li><a href="#">Technology in Cricket</a></li>
                    <li><a href="#">Racism</a></li>
                </ul></li>
                <li style={{backgroundColor:"#04c8f5"}} onClick={handleFeatures}><a style={{ color:"white"}} >Features</a>
                <ul style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", width:"200px"}} class="dropdown">
                    <li><a href="#">Features Homes</a></li>
                    <li><a href="#">Writers</a></li>
                    <li><a href="#">Photo Galaries</a></li>
                    <li><a href="#">Cricket Monthly</a></li>
                </ul></li>
                <li style={{backgroundColor:"#04c8f5"}} onClick={handleVideo}><a style={{ color:"white"}}>Videos</a>
                <ul style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", width:"200px"}} class="dropdown">
                    <li><a href="#">Videos Home</a></li>
                    <li><a href="#">T20 Time Out hindi</a></li>
                    <li><a href="#">Match Day</a></li>
                    <li><a href="#">Fantacy Pick</a></li>
                    <li><a href="#">Run Order</a></li>
                    <li><a href="#">25 Questions</a></li>
                    <li><a href="#">Interviews</a></li>
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