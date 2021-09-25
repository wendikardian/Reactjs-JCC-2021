import Cookies from "js-cookie";
import {useContext} from 'react';
import {useHistory, Link} from 'react-router-dom';
import { Layout, Menu, Row, Col, Input, Table, Image, Space, Button, Form, InputNumber, message, Checkbox} from 'antd';
import Sidebar from './../Sidebar/Sidebar.js';
import {DataCtx} from './../Data/Data.js';
import { RollbackOutlined } from '@ant-design/icons';
import './MovieManagement.css';
import axios from 'axios';


const {  Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;


const AddGame = () => {
    const history = useHistory();
    const {game, setGame} = useContext(DataCtx);
    if(Cookies.get('token') === undefined){
        history.push('/movie');
    } 

    const userToken = Cookies.get('token');
    console.log(userToken);

    const onFinish = (value) => {
        let isSingle;
        let isMulti
        if(value.Player.includes('SinglePlayer') && value.Player.includes('MultiPlayer')){
            isSingle = 1;
            isMulti = 1;
        }else if(value.Player.includes('SinglePlayer')){
            isSingle = 1;
            isMulti = 0;
        }else if(value.Player.includes('MultiPlayer')){
            isMulti = 1;
            isSingle = 0;
        }else{
            isMulti = 0;
            isSingle = 0
        }
        const dataGame = {
            name : value.name,
            genre : value.genre,
            platform : value.platform, 
            release : value.year,
            image_url : value.image_url,
            singlePlayer : isSingle,
            multiplayer : isMulti
        }
        axios.post("https://backendexample.sanbersy.com/api/data-game", dataGame, {
            headers : {"authorization" : "Bearer " + userToken}
        })
        .then(response => {
            let data = response.data;
            console.log(data)
            const newData = {
                id : data.id,
                name : data.name,
                genre : data.genre,
                multiPlayer : data.multiplayer,
                singlePlayer : data.singlePlayer,
                platform : data.platform,
                release : data.release,
                image_url : data.image_url,
            }
            setGame([...game, newData]);
            history.push("/gamemanagement");
            message.success("Success Adding Game");
        }).catch(err => {
            console.log(err.response)
        })

    }

    return (
        <>
        
        <Layout style={{ minHeight: '100vh' }}>
                {(Cookies.get('token') !== undefined) ? <Sidebar /> : <></> }
                    
            <Layout className="site-layout">
            <Content style={{ margin: '40px' }}>
            <Link to="/gamemanagement"><Button type="primary" style={{marginLeft: "-90%" }} shape="circle" icon={<RollbackOutlined />} /></Link>
            <div className="editContainer">
                <h1> Add Game</h1>
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
            <Form.Item name="Player" label="Player" rules={[
                    {
                        required: true,
                        message: 'Please input the player!',
                    },
                    ]}
                    wrapperCol={{
            span : 2
                }}
                >
                
        <Checkbox.Group wrapperCol={{
            span : 2
                }}
                rules={[
                    {
                        required: true,
                        message: 'Please input your player!',
                        
                    },
                    ]}
                >
            <Checkbox 
                    value="SinglePlayer"
                    style={{
                    lineHeight: '30px',
                    }}
                >SinglePlayer</Checkbox>
            <Checkbox
                    value="MultiPlayer"
                    style={{
                    lineHeight: '32px',
                    }}
                >MultiPlayer</Checkbox>
            </Checkbox.Group>
            
        </Form.Item>
                <Button type="primary" htmlType="submit" style={{marginTop:"25pt"}}>
                Submit
            </Button>
        </Form>
            </div>
            </Content>
            </Layout>
        </Layout>
        </>
    );
}

export default AddGame;