import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
import './Login.css';
import logo from './13_generated.jpg';
import axios from 'axios';
import Cookies from "js-cookie";
import { useHistory } from "react-router";
import {DataCtx} from './../../Data/Data.js';
import {useContext} from 'react';

const LoginForm = () => {
    let history = useHistory()
    const {isLogin, setIsLogin} = useContext(DataCtx);
    const onFinish = (values) => {
    console.log('Received values of form: ', values);
    axios.post("https://backendexample.sanbersy.com/api/user-login", {
            email: values.email,
            password: values.password
        }).then(
            (res) => {
                var user = res.data.user
                var token = res.data.token
                Cookies.set('user', user.name, {expires: 1})
                Cookies.set('email', user.email, {expires: 1})
                Cookies.set('token', token, {expires: 1})
                message.success(`welcome, ${user.name}`)
                setIsLogin(true);
                history.push('/');
            }
        ).catch((err) => {
            console.log(err.response.data)
            alert(err.response.data.error)
            
        })
    };
    
    return(
        <>
        <div className="form-container">
            <h1> Please Login </h1>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true,  }}
                onFinish={onFinish}
                >
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input prefix={<MailOutlined />} placeholder="email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                    </Button>
                    Or <Link to="/register" ><a>register now!</a></Link>
                    Or <Link to="/" ><a>Back to home!</a></Link>
                </Form.Item>
                </Form>
        </div>
        <div className="img-login">
            <img src={logo} className="logo-login"></img>
        </div>

        </>
    );
}

export default LoginForm;