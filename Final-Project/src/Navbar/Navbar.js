import 'antd/dist/antd.css';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { DingdingOutlined } from '@ant-design/icons';
import Cookies from "js-cookie";
import {useContext} from 'react';
import {DataCtx} from './../Data/Data.js';
import { useHistory } from "react-router";

const { Header, Content, Footer } = Layout;

const Navbar = () => {
    const history = useHistory();
    const {isLogin, setIsLogin} = useContext(DataCtx);
    let button;
    function logout(){
        setIsLogin(false);
        Cookies.remove('user')
        Cookies.remove('email')
        Cookies.remove('token')
        history.push('/login')
    }

    if(Cookies.get('token') !== undefined){
        button = <Menu theme="dark" mode="horizontal"  style={{float: 'right'}}>
                <Menu.Item style={{width: '70px'}} onClick={logout} > Logout </Menu.Item>
                            </Menu>
    }else{
        button = 
        <>
        <Menu theme="dark" mode="horizontal"  style={{float: 'right'}}>
                <Link to="/login" ><Menu.Item style={{width: '70px'}} > Login </Menu.Item></Link>
                </Menu>
                <Menu theme="dark" mode="horizontal"  style={{float: 'left', marginLeft : "100pt"}}>
                <Link to="/movie" ><Menu.Item style={{width: '70px'}} > Movie </Menu.Item></Link>

                </Menu>
                <Menu theme="dark" mode="horizontal"  style={{float: 'left', marginLeft : "10pt"}}>
                <Link to="/game" ><Menu.Item style={{width: '70px'}} > Game </Menu.Item></Link>
                </Menu>
                </>
    }
    return(
        <>
            <Layout className="layout">
                <Header>
                <div className="logo"> 
                <DingdingOutlined />
                </div>
                <div className="logo title"> 
                GamoviesApp
                </div>
                {button}
                </Header>
            </Layout>
        </>
    );
}

export default Navbar;