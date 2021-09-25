import Cookies from "js-cookie";
import {useContext} from 'react';
import {useHistory, Link} from 'react-router-dom';
import { Layout, Menu, Row, Col, Input, Table, Image, Space, Button, Form, InputNumber, message, Checkbox} from 'antd';
import Sidebar from './../Sidebar/Sidebar.js';
import {DataCtx} from './../Data/Data.js';
import { RollbackOutlined } from '@ant-design/icons';
import './../Management/MovieManagement.css';
import axios from 'axios';

const {  Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

const ChangePassword = () => {
    const userToken = Cookies.get('token');
    console.log(userToken);
    const history = useHistory();
    const onFinish = value => {
        console.log(value)

        if(value.new_password !== value.new_confirm_password){
            message.error("Confirm Password diferent");
        }
        const data = {
            current_password: value.current_password,
            new_password: value.new_password,
            new_confirm_password: value.new_confirm_password
        }
        axios.post('https://backendexample.sanbersy.com/api/change-password', data, 
        {
            headers : {"authorization" : "Bearer " + userToken} })
        .then( res => {
            message.success("success edit")
            history.push("/movie")
        }
        ).catch(err => {
            message.error(err.response.data)
        })
        }

    return (
        <>
        
        <Layout style={{ minHeight: '100vh' }}>
                {(Cookies.get('token') !== undefined) ? <Sidebar /> : <></> }
                    
            <Layout className="site-layout">
            <Content style={{ margin: '40px' }}>
            <div className="editContainer">
                <h1>Change Password</h1>
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
                label="Current Password"
                name="current_password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="New Password"
                name="new_password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="Confirm New Passowrd"
                name="new_confirm_password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password />
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

export default ChangePassword;