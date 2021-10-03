import Cookies from "js-cookie";
import {useContext, useState, useEffect} from 'react';
import {useHistory, Link, useParams} from 'react-router-dom';
import { Layout, Menu, Row, Col, Input, Table, Image, Space, Button, Form, InputNumber, message} from 'antd';
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
    const {movie, setMovie} = useContext(DataCtx);
    const [movieEdit, setMovieEdit] = useState({})
    if(Cookies.get('token') === undefined){
        history.push('/movie');
    } 
    let {id} = useParams();
    const userToken = Cookies.get('token');
    console.log(userToken);
    let editMovie;
    const filter = movie.filter(x => x.id == id);
    console.log(filter);
    const onFinish = value => {
        const data = {
            description : value.description,
            duration : value.duration,
            genre : value.genre,
            image_url : value.image_url,
            rating : value.rating,
            review : value.review,
            title : value.title,
            year : value.year
        }
        axios.put(`https://backendexample.sanbersy.com/api/data-movie/${id}`, data, {
            headers : {"authorization" : "Bearer " + userToken}
        }).then(response => {
            let data = response.data;
            let movieEdit = movie.find( x => x.id == id)
            movieEdit.description = data.description;
            movieEdit.duration = data.duration;
            movieEdit.genre = data.genre;
            movieEdit.image_url = data.image_url;
            movieEdit.rating  = data.rating;
            movieEdit.review = data.review;
            movieEdit.title = data.title;
            movieEdit.year = data.year;
            setMovie([...movie]);
            history.push("/moviemanagement");
            message.success("Success Edit Movie");
        }
        )
    }


    return(
        <>
        <Layout style={{ minHeight: '100vh' }}>
                {(Cookies.get('token') !== undefined) ? <Sidebar /> : <></> }
            
            <Layout className="site-layout">
            <Content style={{ margin: '40px' }}>
            <Link to="/moviemanagement"><Button type="primary" style={{marginLeft: "-90%" }} shape="circle" icon={<RollbackOutlined />} /></Link>
            <div className="editContainer">
                <h1> Edit Movie</h1>
                    {
                        filter.map( x => { 
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
                    title: x.title,
                    image_url : x.image_url,
                    duration : x.duration,
                    genre : x.genre,
                    rating : x.rating, 
                    year : x.year,
                    description : x.description,
                    review : x.review,
                }}
                >
                <Form.Item
                label="Title"
                name="title"
                rules={[
                    {
                        required: true,
                        message: 'Please input the title!',
                    },
                    ]}
                >
                <Input name="title" />
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
            
            <Form.Item wrapperCol={{
                span: 1
                }}
                label="Duration"
                name="duration"
                rules={[
                    {
                        
                        required: true,
                        message: 'Please input Duration!',
                        
                    },
                    ]}
                >
                <InputNumber min={0} max={1000}/>
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
                label="Rating"
                name="rating"
                rules={[
                    {
                        
                        required: true,
                        message: 'Please input Rating!',
                        
                    },
                    ]}
                >
                <InputNumber min={0} max={10} />
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
                <InputNumber min={1980} max={2021} />
            </Form.Item>
                <Form.Item
                label="Description"
                name="description"
                rules={[
                    {
                        required: true,
                        message: 'Please input your the description!',
                    },
                    ]}
                >
                <Input.TextArea name="description"/>
            </Form.Item>
                <Form.Item
                label="Review"
                name="review"
                rules={[
                    {
                        required: true,
                        message: 'Please input your the Review!',
                    },
                    ]}
                >
                <Input.TextArea name="review"/>
            
            </Form.Item>
                <Button type="primary" htmlType="submit" style={{marginTop:"25pt"}}>
                Submit
            </Button>
        </Form>
                                </>
                            );
                        }

                        )
                        }
                        
                       
            </div>
            </Content>
            </Layout>
        </Layout>
        </>
    );
}

export default EditMovie;