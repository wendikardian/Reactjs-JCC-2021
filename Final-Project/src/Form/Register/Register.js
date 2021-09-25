import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
import './Register.css';
import logo from './pict.jpg';
import axios from 'axios';
import { useHistory } from "react-router";
import {message} from 'antd';


const RegisterForm = () => {
    let history = useHistory()
    
    const onFinish = (values) => {
        // console.log(values)
        const data = {
        name : values.name,
        email : values.email,
        password : values.password
    }
        console.log(data);
        axios.post("https://backendexample.sanbersy.com/api/register", data).then(
            () => {
                message.success("Success, please login")
                history.push('/login');
            }
        ).catch((err) => {
            console.log(err.response.data)
            message.error(err.response.data)
        })
    };
    return(
        <>
        <div className="form-container">
            <h1> Register </h1>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                >
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
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
                    Register
                    </Button>
                    Or <Link to="/login" ><a>Already have an account</a></Link>
                </Form.Item>
                </Form>
        </div>
        <div className="img-login">
            <img src={logo} className="logo-login"></img>
        </div>

        </>
    );
}

export default RegisterForm;