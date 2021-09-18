import {useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const ContentCTX = createContext();
function DataContent(props){
    
    const [mobileApp, setMobileApp] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://backendexample.sanbercloud.com/api/mobile-apps');
            setMobileApp(result.data.map(x => { return {id:x.id , name: x.name, description: x.description, category: x.category, size: x.size, price: x.price, rating: x.rating, image_url: x.image_url, release_year: x.release_year, is_android_app: x.is_android_app, is_ios_app: x.is_ios_app}}));
        }
        fetchData();
    }, []);
    const context = {
        mobileApp, setMobileApp
    }

    return(
        <ContentCTX.Provider value= {context}>
            {props.children}
        </ContentCTX.Provider>
    );

}

export default DataContent;