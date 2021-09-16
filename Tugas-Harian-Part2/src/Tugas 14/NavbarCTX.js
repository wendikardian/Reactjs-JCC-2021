import './tugas14.css';
import {useState, createContext } from 'react';


export const NavbarCTX = createContext();
function NavbarContext(props){
    const[isDark, setIsDark] = useState(false);
    const context = {isDark, 
        setIsDark};

    return(
    <NavbarCTX.Provider value={context}>
            {props.children}
        </NavbarCTX.Provider>
    );
}

export default NavbarContext;