import 'antd/dist/antd.css';
import {useContext} from 'react';
import { Layout, Menu, Row, Col, Input } from 'antd';
import GameItem from './GameItem.js';
import {DataCtx} from "./../Data/Data.js";
import Sidebar from './../Sidebar/Sidebar.js';
import Cookies from "js-cookie";
import { useHistory, useParams} from 'react-router-dom';


const {  Content } = Layout;
const { SubMenu } = Menu;
const GameSearch = () => {
    const history = useHistory();
    const {game} = useContext(DataCtx);
    const { Search } = Input;
    let {keyword} = useParams();
    const filter = game.filter(x => x['name'].toUpperCase().includes(keyword.toUpperCase()));
    console.log(game);
    const searchHandle = (value) => {
        if(value !== ""){
            history.push(`/game/search/${value}`)
        }else{
            history.push(`/game`)

        }
    }
    return(
        <>
            <Layout style={{ minHeight: '100vh' }}>
                {(Cookies.get('token') !== undefined) ? <Sidebar /> : <></> }
                    
            <Layout className="site-layout">
            <Content style={{ margin: '40px' }}>
                <Search placeholder="input search text" onSearch={searchHandle} style={{ width: 400 }} />
                <h1 style={{marginTop: "20pt"}}>Keyword : {keyword} </h1>
                <Row gutter={12}>
                    {
                        filter.map(x => {
                            console.log(x)
                            return(
                                <Col className="gutter-row" style={{marginTop: '30px'}} span={6}>
                                    <GameItem id = {x.id} genre = {x.genre} image_url = {x.image_url} singlePlayer = {x.singlePlayer} multiPlayer = {x.multiPlayer} name = {x.name} platform = {x.platform} release= {x.release}  />
                                </Col>
                            );
                        })
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

export default GameSearch;