import 'antd/dist/antd.css';
import {useContext} from 'react';
import { Layout, Menu, Row, Col, Input} from 'antd';
import MovieItem from '../Section/MovieItem.js';
import {DataCtx} from "./../Data/Data.js";
import Sidebar from './../Sidebar/Sidebar.js';
import Cookies from "js-cookie";
import { useHistory} from 'react-router-dom';


const {  Content, Sider } = Layout;
const { SubMenu } = Menu;
const MovieSection = () => {
    const history = useHistory();
    const { Search } = Input;
    const {movie} = useContext(DataCtx);
    console.log(movie);
    const searchHandle = (value) => {
        if(value !== ""){
            history.push(`/movie/search/${value}`)
        }else{
            history.push(`/movie`)

        }
    }
    

    return(
        <>
            <Layout style={{ minHeight: '100vh' }}>
                {(Cookies.get('token') !== undefined) ? <Sidebar /> : <></> }
                    
            <Layout className="site-layout">
            <Content style={{ margin: '40px' }}>
                    <Search placeholder="input search text" onSearch={searchHandle} style={{ width: 400 }} />
                <Row gutter={12}>
                    {
                        movie.map(x => {
                            console.log(x)
                            return(
                                <Col className="gutter-row" style={{marginTop: '30px'}} span={6}>
                                    <MovieItem title = {x.title} id = {x.id} description= {x.description}  duration={x.duration} genre={x.genre} image_url={x.image_url} rating={x.rating} review={x.review} year={x.year} />
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

export default MovieSection;