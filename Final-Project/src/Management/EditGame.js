import Cookies from "js-cookie";
import {useContext, useState, useEffect} from 'react';
import {useHistory, Link, useParams} from 'react-router-dom';
import { Layout, Menu, Row, Col, Input, Table, Image, Space, Button, Form, InputNumber, message, Checkbox} from 'antd';
import Sidebar from './../Sidebar/Sidebar.js';
import {DataCtx} from './../Data/Data.js';
import { RollbackOutlined } from '@ant-design/icons';
import './MovieManagement.css';
import axios from 'axios';


const {  Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;


const EditMovie = () => {
    const history = useHistory();
    const {game, setGame} = useContext(DataCtx);
    const [movieEdit, setMovieEdit] = useState({})
    if(Cookies.get('token') === undefined){
        history.push('/movie');
    } 
    let {id} = useParams();
    const userToken = Cookies.get('token');
    console.log(userToken);
    let editMovie;
    const filter = game.filter(x => x.id == id);
    const onFinish = value => {
        console.log(value);
        const dataGame = {
            name : value.name,
            genre : value.genre,
            platform : value.platform, 
            release : value.year,
            image_url : value.image_url,
            singlePlayer : value.SinglePlayer,
            multiplayer : value.MultiPlayer,
        }
        axios.put(`https://backendexample.sanbersy.com/api/data-game/${id}`, dataGame, {
            headers : {"authorization" : "Bearer " + userToken}
        }).then(response => {
            let data = response.data;
            let gameEdit = game.find( x => x.id == id)
            gameEdit.name = data.name;
            gameEdit.genre = data.genre;
            gameEdit.platform = data.platform;
            gameEdit.release = data.release;
            gameEdit.image_url  = data.image_url;
            gameEdit.singlePlayer = data.singlePlayer;
            gameEdit.multiPlayer = data.multiplayer;
            setGame([...game]);
            history.push("/gamemanagement");
            message.success("Success Edit Game");
        }
        )
    }


    return(
        <>
        
        <Layout style={{ minHeight: '100vh' }}>
                {(Cookies.get('token') !== undefined) ? <Sidebar /> : <></> }
                    
            <Layout className="site-layout">
            <Content style={{ margin: '40px' }}>
            <Link to="/gamemanagement"><Button type="primary" style={{marginLeft: "-90%" }} shape="circle" icon={<RollbackOutlined />} /></Link>
            <div className="editContainer">
                <h1> Edit Game</h1>

                {
                        filter.map( x => { 
                            console.log(x)
                            return(
                                <>
                                <Form 
                        style={{marginTop: "30pt"}}
                        labelCol={{
                span: 4
                }}
                wrapperCol={{
                span: 23
                }}
                onFinish={onFinish}
                layout="horizontal"
                autoComplete="off"
                initialValues={{
                    name : x.name, 
                    image_url : x.image_url, 
                    platform : x.platform, 
                    genre : x.genre, 
                    year : x.release, 
                    SinglePlayer : x.singlePlayer,
                    MultiPlayer : x.multiPlayer,
                }}
                >
                <Form.Item
                label="Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input the Name!',
                    },
                    ]}
                >
                <Input />
            </Form.Item>
                <Form.Item
                label="Image Url"
                name="image_url"
                rules={[
                    {
                        required: true,
                        message: 'Please input the image_url!',
                    },
                    ]}
                >
                <Input />
            </Form.Item>
                <Form.Item
                label="Platform"
                name="platform"
                rules={[
                    {
                        required: true,
                        message: 'Please input the Platform!',
                    },
                    ]}
                >
                <Input />
            </Form.Item>
                <Form.Item
                label="Genre"
                name="genre"
                rules={[
                    {
                        required: true,
                        message: 'Please input the genre!',
                    },
                    ]}
                >
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{
                span: 1
                }}
                label="Release Year"
                name="year"
                rules={[
                    {
                        
                        required: true,
                        message: 'Please input Release Year!',
                        
                    },
                    ]}
                >
                <InputNumber min={2000} max={2021} />
            </Form.Item>
            <Form.Item
                name="SinglePlayer"
                valuePropName="checked"
                wrapperCol={{
                span: 8,
                }}
            >
                <Checkbox>Single Player</Checkbox>
            </Form.Item>
            <Form.Item
                name="MultiPlayer"
                valuePropName="checked"
                wrapperCol={{
                span: 8,
                }}
            >
                <Checkbox>MultiPlayer</Checkbox>
            </Form.Item>
                <Button type="primary" htmlType="submit" style={{marginTop:"25pt"}}>
                Submit
            </Button>
        </Form>
            
        </>
                            );
                        })
                }
                </div>
            </Content>
            </Layout>
        </Layout>   
        </>   
    );
}

export default EditMovie;