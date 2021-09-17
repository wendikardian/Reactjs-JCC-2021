import './Navbar.css';
import  NavbarContext  from './NavbarCTX.js';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {NavbarCTX} from './NavbarCTX.js';
import 'antd/dist/antd.css';
import { Switch } from 'antd';

function Navbar (){

    const {isDark, setIsDark} = useContext(NavbarCTX);
    let toChange ;
    if(isDark === false){
        toChange = "Dark";
    }else{
        toChange = "Light";
    }

    function changeTheme(){
        let navElement = document.querySelector(".topnav");
        let aElement = document.querySelectorAll(".nav");
        console.log(aElement);
        if(isDark == false){
            navElement.style.backgroundColor = "black"
            for(let i = 0; i < aElement.length; i++){
                aElement[i].style.color = "white"
            }
            setIsDark(true);
        }else{
            navElement.style.backgroundColor = "white"
            for(let i = 0; i < aElement.length; i++){
                aElement[i].style.color = "black"
            }
            setIsDark(false);
        }
    }

    return (
        <>
        <NavbarContext>
            <div class="topnav">
                <Link to="/"><a> <span className="nav">Tugas 9</span></a> </Link>
                <Link to="/tugas10" ><a><span className="nav">Tugas 10</span> </a></Link>
                <Link to="/tugas11" > <a><span className="nav">Tugas 11</span></a> </Link>
                <Link to="/tugas12" > <a><span className="nav">Tugas 12</span> </a></Link>
                <Link to="/tugas13" ><a><span className="nav">Tugas 13</span> </a></Link>
                <Link to="/tugas14" ><a><span className="nav">Tugas 14</span></a> </Link>
                <Link to="/tugas15" ><a><span className="nav">Tugas 15</span></a> </Link>
                <div className = "switch">
                <Switch defaultChecked onChange={changeTheme} />
                </div> 
            </div>
            
            {/* <div className="navbarTheme" onClick={changeTheme}>
                {toChange} Theme
            </div> */}
        </NavbarContext>
        </>
    );
}

export default Navbar;

