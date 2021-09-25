import Cookies from "js-cookie";
import {useContext} from 'react';
import { useHistory, useParams, Link} from 'react-router-dom';
import { Layout, Menu, Row, Col, Input, Table, Image, Space, Button, message} from 'antd';
import Sidebar from './../Sidebar/Sidebar.js';
import {DataCtx} from './../Data/Data.js';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';



const {  Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

const SearchMovieManagement = () => {
    const history = useHistory();
    const { Search } = Input;
    let {keyword} = useParams();
    const {movie, setMovie} = useContext(DataCtx);
    const filter = movie.filter(x => x['title'].toUpperCase().includes(keyword.toUpperCase()));
    const userToken = Cookies.get('token');
    if(Cookies.get('token') === undefined){
        history.push('/movie');
    } 
    const searchHandle = (value) => {
        if(value !== ""){
            history.push(`/moviemanagement/search/${value}`)
        }else{
            history.push(`/moviemanagement`)

        }
    }

    const onEditHandle = id => {
        const idReal = id.id;
        history.push(`/movie/edit/${idReal}`)
    };

    const onDeleteHandle = id => {
        const idReal = id.id
        axios.delete(`https://backendexample.sanbersy.com/api/data-movie/${idReal}`,
        {headers : {"authorization" : "Bearer " + userToken}}
        ).then(() => {
            let newMovieEntry = movie.filter(x => {return x.id !== idReal})
            setMovie(newMovieEntry);
            message.success("Movie has been Deleted");
        })
    }

    const columns = [
        {
            title : 'Title',
            dataIndex : 'title',
            key : 'title'
        },{
            title : 'Image',
            dataIndex : 'image_url',
            key : 'image_url',
            render : image_url => (
                <>
                <Image
                    width={70}
                    src={image_url}
                                />
                </>
            )
        },{
            title : 'Duration ',
            dataIndex : 'duration',
            key : 'duration',
            sorter : (a,b) => a.duration -b.duration,
            render : duration => (
                <>{duration} Minute</>
            )
        },{
            title : 'Genre',
            dataIndex : 'genre',
            key: 'genre'
        },{
            title : "Rating",
            dataIndex : 'rating',
            key : 'rating',
            sorter : (a,b) => a.rating -b.rating,
            render : (rating) => (
                <>
                    {rating}/10
                </>
            )
        },{
            title : "Release Year",
            dataIndex : "year",
            key : "year",
            sorter : (a,b) => a.year -b.year,
        },{
            title : "Description",
            dataIndex : "description",
            key : "description"
        },{
            title : "Review",
            dataIndex : "review",
            key : "review"
        },{
                    title: 'Action',
                    key: 'action',
                    render: (id) => (
                    <Space size="middle">
                        <Button type="primary"><a value={id} onClick={() => onEditHandle(id)} > Edit </a></Button>
                        <Button type="danger"><a value={id} onClick={() => onDeleteHandle(id)}>Delete</a></Button>
                    </Space>
                    ),
                }
    ]
    return(
        <>

        <Layout style={{ minHeight: '100vh' }}>
                {(Cookies.get('token') !== undefined) ? <Sidebar /> : <></> }
                    
            <Layout className="site-layout">
            <Content style={{ margin: '40px' }}>
                <h1> Movie Management</h1>
                <Link to="/addmovie"><Button icon={<PlusOutlined />} size="large" type="primary" shape="circle" style={{position: "fixed", bottom:"5%", right : "5%", zIndex: "90"}} /> </Link>
                    <Search placeholder="input search text" onSearch={searchHandle} style={{ width: 400 }} />
                    <h1 style={{marginTop: "20pt"}}>Keyword : {keyword} </h1>
                    <Row gutter={12} style={{marginTop: "30pt"}}>
                        <Table columns={columns} dataSource={filter} />
                    </Row>
                <div className="movie-section">
                </div>
            </Content>
            </Layout>
        </Layout>
        </>
    );
}

export default SearchMovieManagement;