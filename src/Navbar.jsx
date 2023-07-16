import React, { useState, useRef, useEffect } from "react";
import { FaBars,} from "react-icons/fa";
import { links, social } from "./Data";
import logo from "./logo.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [showLinks,setshowLinks]=useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className={`${styles.navContainer}`}>
        <div className={`${styles.navheader}`}>
          <img src={logo} alt="logo" className={`${styles.logopic}`} />
          <button className={`${styles.togglebtn}`} onClick={()=>setshowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        <div className={`${styles.linkscontainer}`} ref={linksContainerRef}>
          <ul className={`${styles.links}`} ref={linksRef}>
            {links.map((link)=>{
              const {id,url,text}=link;
              return <li key={id}>
                <a href={url}>{text}</a>
              </li>
            })}
          </ul>
        </div>
        <ul className={`${styles.socialIcons}`}>
        {social.map((socialIcon)=>{
          const {id,url,icon}=socialIcon;
          return <li key={id}>
         <a href={url}>{icon}</a>
          </li>
        })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
