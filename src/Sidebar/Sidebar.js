import 'antd/dist/antd.css';
import './Sidebar.css'
import { Layout, Menu } from 'antd';
import {  VideoCameraOutlined, UserOutlined,DribbbleSquareOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const Sidebar = () => {

    return(
        <>
        <Sider collapsible >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <SubMenu key="sub1" title="Movie" icon={<VideoCameraOutlined />}>
                    <Link to="/movie"><Menu.Item key="3">Movie list</Menu.Item></Link>
                    <Link to="/moviemanagement"><Menu.Item key="4">Movie Management</Menu.Item></Link>
                    </SubMenu>
                    <SubMenu key="sub2" title="Game" icon={<DribbbleSquareOutlined />}>
                    <Link to="/game"><Menu.Item key="6">Game List</Menu.Item></Link>
                    <Link to="/gamemanagement"><Menu.Item key="8">Game Management</Menu.Item></Link>
                    </SubMenu>
                    <SubMenu key="sub3" title="Profile" icon={<UserOutlined />}>
                    <Link to="/changepassword"><Menu.Item key="6">Change Password</Menu.Item></Link>
                    </SubMenu>
                </Menu>
                </Sider>
        </>
    );
}

export default Sidebar;