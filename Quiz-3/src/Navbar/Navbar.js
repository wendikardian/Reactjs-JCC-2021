
import './Navbar.css';
import logo from './logo.png';
import {Link} from 'react-router-dom';
import { Button } from 'antd';
import { Input, Space, Search } from 'antd';
import 'antd/dist/antd.css';
import { useHistory} from 'react-router-dom';


function Navbar(){
    let history = useHistory();
    const { Search } = Input;
    const onSearch = (value) => {
        history.push(`/search/${value}`);
    }

    return (
        <div class="topnav">
        <a href="">
            <img src={logo} width="100" className="nav-logo" />
        </a>
        <Link to="/"><a href="">Home</a></Link>
        <Link to="/mobile-list" ><a href="">Mobile List</a></Link>
        <Link to="/about" ><a href="">About</a></Link>
        <div className="form-search-bar">
        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        </div>
    </div>
    );

}

export default Navbar;