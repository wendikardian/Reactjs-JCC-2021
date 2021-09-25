import './Form.css'
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, InputNumber, Select, Col, Rate, message, TextArea } from 'antd';
import axios from 'axios';
import { useHistory} from 'react-router-dom';
import {useContext} from 'react';
import {ContentCTX} from './../Content/DataContent.js';

function FormMobile(){
    let history = useHistory();
    const {mobileApp, setMobileApp} = useContext(ContentCTX);
    const onFinish = (values) => {
        const data = {
            name : values.name, 
            description : values.description, 
            category : values.category, 
            size : values.size, 
            price : values.price, 
            rating : values.rating, 
            image_url : values.image_url,
            release_year : values.release_year, 
        };
        if(values.platform.includes("is_ios_app") && values.platform.includes("is_android_app")){
            data['is_ios_app'] = true;
            data['is_android_app'] = true;
        }else if(values.platform.includes("is_ios_app")){
            data['is_ios_app'] = true;
            data['is_android_app'] = false;
        }else if(values.platform.includes("is_android_app")){
            data['is_ios_app'] = false;
            data['is_android_app'] = true;
        }else{
            data['is_ios_app'] = false;
            data['is_android_app'] = false;
        }
        axios.post("http://backendexample.sanbercloud.com/api/mobile-apps", data)
                .then(response => {
                    let uploadedData = response.data;
                    console.log(uploadedData);
                    const databaru = {
                        id : uploadedData.id,
                        name : uploadedData.name,
                        description : uploadedData.description,
                        category : uploadedData.category,
                        size : uploadedData.size,
                        price : uploadedData.price,
                        rating : uploadedData.rating,
                        image_url : uploadedData.image_url,
                        release_year : uploadedData.release_year,
                        is_android_app : uploadedData.is_android_app,
                        is_ios_app : uploadedData.is_ios_app
                    }
                    setMobileApp([ ...mobileApp, databaru]);
                    history.push("/mobile-list");
                    message.success("Success adding data");
                })}
    
    
    return(
        <div class="form-container">
            <h1>Tambah Data Mobile Apps </h1>
            <Form
                labelCol={{
                span: 4
                }}
                wrapperCol={{
                span: 14
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
                        message: 'Please input the user name!',
                    },
                    ]}
                >
                <Input />
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
                label="Category"
                name="category"
                rules={[
                    {
                        required: true,
                        message: 'Please input the category!',
                    },
                    ]}
                >
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{
                span: 1
                }}
                label="Release Year"
                name="release_year"
                rules={[
                    {
                        
                        required: true,
                        message: 'Please input release year!',
                        
                    },
                    ]}
                >
                <InputNumber min={2007} />
            </Form.Item>
            <Form.Item wrapperCol={{
                span: 1
                }}
                label="Size (Mb)"
                name="size"
                rules={[
                    {
                        required: true,
                        message: 'Please input the size!',
                        
                    },
                    ]}
                >
                <InputNumber />
            </Form.Item>
            <Form.Item wrapperCol={{
                span: 1
                }}
                label="Price"
                name="price"
                rules={[
                    {
                        required: true,
                        message: 'Please input the price!',
                        
                    },
                    ]}
                >
                <InputNumber />
            </Form.Item>
            <Form.Item wrapperCol={{
                span: 1
                }}
                label="Rating"
                name="rating"
                rules={[
                    {
                        
                        required: true,
                        message: 'Please input rating!',
                        
                    },
                    ]}
                >
                <InputNumber min={1} max={5} />
            </Form.Item>
            
            <Form.Item
                label="Image Url"
                name="image_url"
                rules={[
                    {
                        required: true,
                        message: 'Please input image url!',
                    },
                    ]}
                >
                <Input />
            </Form.Item>
            <Form.Item name="platform" label="Platform" rules={[
                    {
                        required: true,
                        message: 'Please input the platform!',
                    },
                    ]}
                >
                
        <Checkbox.Group wrapperCol={{
                span: 1
                }}
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                        
                    },
                    ]}
                >
            <Checkbox 
                    value="is_android_app"
                    style={{
                    lineHeight: '32px',
                    }}
                >Android</Checkbox>
            <Checkbox
                    value="is_ios_app"
                    style={{
                    lineHeight: '32px',
                    }}
                >IOS</Checkbox>
            </Checkbox.Group>
            
        </Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
                </Form>

        </div>
            );

                }
export default FormMobile;