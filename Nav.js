import React,{useState,useEffect} from 'react'
import './Nav.css';

const Nav = () => {
    const [show,handleShow]=useState(false);

    const transitionNavBar=()=>{
        if(window.scrollY>100){
           handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);

        return () => window.removeEventListener("scroll",transitionNavBar);
    },[])

    return (
        <div className={`nav ${show && "nav__black"}`}>
        <div className="nav_contents">
            <img className="nav__logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

            <img className="nav__avatar" src="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="" />
        </div>
        </div>
    )
}

export default Nav;
