import { Table, Space, message, Button } from 'antd';
import 'antd/dist/antd.css';
import {useContext} from 'react';
import {ContentCTX} from './../Content/DataContent.js';
import {Link} from 'react-router-dom';
import './List.css';
import axios from 'axios';
import { useHistory} from 'react-router-dom';

function List(){
    const {mobileApp, setMobileApp} = useContext(ContentCTX);
    let history = useHistory();
    const onDeleteHandle = (id) => {
        const idMobileApp = id.id;
        axios.delete(`http://backendexample.sanbercloud.com/api/mobile-apps/${idMobileApp}`)
        .then(() => {
            let newMobileApp = mobileApp.filter(x => {return x.id !== idMobileApp;})
            setMobileApp(newMobileApp);
            message.success("Data telah dihapus");
        })
    }

    const onEditHandle = (id) => {
        const idReal = id.id;
        axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps/${idReal}`)
        .then(res => {
            let data = res.data;
            history.push(`/mobile-form/edit/${idReal}`);
        })
    }

    const columns = [
                {
                    title: 'Nama',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'Description',
                    dataIndex: 'description',
                    key: 'description',
                },
                {
                    title: 'Category',
                    dataIndex: 'category',
                    key: 'category',
                },
                {
                    title: 'Release Year',
                    dataIndex: 'release_year',
                    key: 'release_year',
                },
                {
                    title: 'Size',
                    dataIndex: 'size',
                    key: 'size',
                    render : size => (
                        <>
                            {size >= 1000 ? `${size/1000} Gb` : `${size} Mb`}
                        </>
                    )
                },
                {
                    title: 'Price',
                    dataIndex: 'price',
                    key: 'price',
                    render : price =>(
                        <>
                            {price === 0 ? "FREE" : `${price}`}
                        </>
                    )
                },{
                    title: 'Rating',
                    dataIndex: 'rating',
                    key: 'rating',
                },{
                    title: 'For Android ?',
                    dataIndex: 'is_android_app',
                    key: 'is_android_app',
                    render : is_android_app => (
                        <>
                            {is_android_app == true ? "Yes" : "No"}
                        </>
                    )
                },
                {
                    title: 'For IOS ?',
                    dataIndex: 'is_ios_app',
                    key: 'is_ios_app',
                    render : is_ios_app => (
                        <>
                            {is_ios_app == true ? "Yes" : "No"}
                        </>
                    )
                },
                {
                    title: 'Action',
                    key: 'action',
                    render: (id) => (
                    <Space size="middle">
                        {/* <a value={id} onClick={handleEdit}>Edit</a> */}
                        <Button type="primary"><a value={id} onClick={() => onEditHandle(id)}  > Edit</a></Button>
                        <Button type="danger"><a value={id} onClick={() => onDeleteHandle(id)} >Delete</a></Button>
                    </Space>
                    ),
                },
                
                ];

    return(
        <>
            <h1>Data Mobile APP</h1>
            <Link to="/mobile-form"><div className = "btn-tambah"><Button type="primary">+ Tambah Data</Button></div></Link>
            <Table columns={columns} dataSource={mobileApp} />
            
        </>
        
    );
}

export default List;