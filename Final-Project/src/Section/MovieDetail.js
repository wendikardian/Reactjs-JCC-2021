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
const MovieDetail = () => {
    const {movie} = useContext(DataCtx);
    let {id} = useParams();
    const filter = movie.filter(x => x.id == id);
    console.log(filter)

    return(
        <>
            <Layout style={{ minHeight: '100vh' }}>
                {(Cookies.get('token') !== undefined) ? <Sidebar /> : <></> }
            <Layout className="site-layout">
            <Content style={{ margin: '40px' }}>
                <Row gutter={12}>
                    <Link to="/movie"><Button type="primary" shape="circle" icon={<RollbackOutlined />} /></Link>
                    {
                        filter.map( x => { 
                            return (
                                <div className ="movie-detail-container">
                                <h1> - Movie Detail - </h1>
                                <Image
                                width={250}
                                src={x.image_url}
                                />
                                <div className="detail-description">
                                <h4><b>Title</b> : {x.title}</h4>
                                <h4><b>Duration</b> : {x.duration}</h4>
                                <h4><b>Genre</b> : {x.genre}</h4>
                                <h4><b>Rating</b> : {x.rating}/10</h4>
                                <h4><b>Release Year</b>: {x.year}</h4>
                                <h4><b>Description:</b> </h4>
                                <h4>{x.description}</h4>
                                <h4><b>Review:</b> </h4>
                                <h4>{x.review}</h4>
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

export default MovieDetail;