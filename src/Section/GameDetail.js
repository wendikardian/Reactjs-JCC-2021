import 'antd/dist/antd.css';
import {useContext} from 'react';
import { Layout, Menu, Row, Image, Button} from 'antd';
import {DataCtx} from "./../Data/Data.js";
import Sidebar from './../Sidebar/Sidebar.js';
import Cookies from "js-cookie";
import {  useParams, Link} from 'react-router-dom';
import { RollbackOutlined } from '@ant-design/icons';
import './Section.css';

const {  Content, Sider } = Layout;
const { SubMenu } = Menu;
const GameDetail = () => {
    const {game} = useContext(DataCtx);
    let {id} = useParams();
    const filter = game.filter(x => x.id == id);
    console.log(filter)
    return(
        <>
            <Layout style={{ minHeight: '100vh' }}>
                {(Cookies.get('token') !== undefined) ? <Sidebar /> : <></> }
            <Layout className="site-layout">
            <Content style={{ margin: '40px' }}>
                <Row gutter={12}>
                    <Link to="/game"><Button type="primary" shape="circle" icon={<RollbackOutlined />} /></Link>
                    {
                        filter.map( x => { 
                            let singlePlayerStatus =""
                            let multiPlayerStatus =""
                            if(x.singlePlayer == true){
                                singlePlayerStatus = "Yes"
                            }else{
                                singlePlayerStatus = "No"
                            }
                            if(x.multiPlayer == true){
                                multiPlayerStatus= "Yes"
                            }else{
                                multiPlayerStatus= "No"

                            }

                            return (
                                <div className ="movie-detail-container">
                                <h1> - Game Detail - </h1>
                                <Image
                                width={250}
                                src={x.image_url}
                                />
                                <div className="detail-description">
                                <h4><b>Name</b> : {x.name}</h4>
                                <h4><b>Genre</b> : {x.genre}</h4>
                                <h4><b>Single Player</b> : {singlePlayerStatus}</h4>
                                <h4><b>Multi Player</b> : {multiPlayerStatus}</h4>
                                <h4><b>Platform</b>: {x.platform}</h4>
                                <h4><b>Release Year</b>: {x.release}</h4>
                                </div>
                                </div>
                            );
                        }
                            
                        )
                    }
                    
                    </Row>
                <div className="movie-section">
                </div>
            </Content>
            </Layout>
        </Layout>
        </>
    );
}

export default GameDetail;