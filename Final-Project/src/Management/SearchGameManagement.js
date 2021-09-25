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
const SearchGameManagement = () => {
    const history = useHistory();
    const { Search } = Input;
    let {keyword} = useParams();
    const {game, setGame} = useContext(DataCtx);
    const filter = game.filter(x => x['name'].toUpperCase().includes(keyword.toUpperCase()));
    const userToken = Cookies.get('token');
    if(Cookies.get('token') === undefined){
        history.push('/movie');
    } 
    const searchHandle = (value) => {
        if(value !== ""){
            history.push(`/gamemanagement/search/${value}`)
        }else{
            history.push(`/gamemanagement`)

        }
    }

    const onEditHandle = id => {
        const idReal = id.id;
        history.push(`/game/edit/${idReal}`)
    };

    const onDeleteHandle = id => {
        const idReal = id.id
        axios.delete(`https://backendexample.sanbersy.com/api/data-game/${idReal}`,
        {headers : {"authorization" : "Bearer " + userToken}}
        ).then(() => {
            let newMovieEntry = game.filter(x => {return x.id !== idReal})
            setGame(newMovieEntry);
            message.success("Game has been Deleted");
        })
    }

    const columns = [
        {
            title : 'Name',
            dataIndex : 'name',
            key : 'name',
            filters: [
            {
                text: 'Dota',
                value: 'Dota',
            },
            {
                text: 'Mobile',
                value: 'Mobile',
            },
            ],
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
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
            title : 'Genre',
            dataIndex : 'genre',
            key: 'genre',
            filters: [
            {
                text: 'Action',
                value: 'Action',
            },
            {
                text: 'Competitive',
                value: 'Competitive',
            },
            {
                text: 'Fantasy',
                value: 'Fantasy',
            },
            {
                text: 'Advanture',
                value: 'Advanture',
            },
            {
                text: 'MOBA',
                value: 'MOBA',
            },
            ],
            onFilter: (value, record) => record.genre.indexOf(value) === 0,
        },{
            title : "Platform",
            dataIndex : 'platform',
            key : 'platform',
            filters: [
            {
                text: 'Android',
                value: 'Android',
            },
            {
                text: 'IOS',
                value: 'IOS',
            },
            {
                text: 'PS 4',
                value: 'PS 4',
            },
            {
                text: 'windows',
                value: 'windows',
            },
            {
                text: 'linux',
                value: 'linux',
            },
            ],
            onFilter: (value, record) => record.platform.indexOf(value) === 0,
        },{
            title : "Release Year",
            dataIndex : "release",
            key : "release",
            sorter : (a,b) => a.release -b.release,
        },{
        },{
            title : "MultiPlayer",
            dataIndex : "multiPlayer",
            key : "multiPlayer",
            render : multiPlayer => (
                <>
                {multiPlayer == 1 ? "Yes" : "No" }
                </>
            ),
            sorter : (a,b) => a.multiPlayer -b.multiPlayer,
        },{
        },{
            title : "SinglePlayer",
            dataIndex : "singlePlayer",
            key : "singlePlayer",
            render : singlePlayer => (
                <>
                {singlePlayer == true ? "Yes" : "No" }
                </>
            ),
            sorter : (a,b) => a.singlePlayer -b.singlePlayer,
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
                <h1> Game Management</h1>
                <Link to="/addgame"><Button icon={<PlusOutlined />} size="large" type="primary" shape="circle" style={{position: "fixed", bottom:"5%", right : "5%", zIndex: "90"}} /> </Link>
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

export default SearchGameManagement;