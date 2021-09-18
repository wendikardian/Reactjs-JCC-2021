import './Content.css';
import {ContentCTX} from './DataContent.js';
import {useContext, useEffect, useState} from "react";
import { useHistory, useParams} from 'react-router-dom';
import axios from 'axios';

function SearchContent(){
    let {search} = useParams() ;
    console.log(search) ;
    const {mobileApp, setMobileApp} = useContext(ContentCTX);
    const [filterData, setFilterData] = useState();
    const filter = mobileApp.filter(data => data['name'].toUpperCase().includes(search.toUpperCase()));
    console.log(filter);
    
    return(
        <div class="row">
        <div class="section">
            <div class="card-content">
                    <h1 className="mobile-app-title">Popular Mobile Game</h1>

                {
                    filter.map((item) => {
                        let harga;
                        if(item.price == 0){
                            harga = "free";
                        }else{
                            harga = `${item.price}`
                        }
                        let realSize;
                        if(item.size >= 1000){
                            realSize = `${item.size/1000} GB`
                        }else{
                            realSize = `${item.size} MB`
                        }

                        let whatPlatform;
                        if(item.is_android_app == true && item.is_ios_app == true){
                            whatPlatform = `Android and IOS`;
                        }else if(item.is_ios_app == true && item.is_android_app == false){
                            whatPlatform = `IOS`;
                        }else{
                            whatPlatform = `Android`;
                        }
                        return(
                            <div className="main-content">
                                <h2>{item.name}</h2>
                                <h5>Release Year : {item.release_year}</h5>
                                <img classname="fakeimg" style={{ width: "50%", height: 300, objectFit: "cover" }} src={item.image_url}/>
                                <br />
                                <br />
                                <div>
                                    <strong>Price: {harga}</strong><br />
                                    <strong>Rating: {item.rating}</strong><br />
                                    <strong>Size: {realSize}</strong><br />
                                        <strong style={{ marginRight: 10 }}>Platform : {whatPlatform}</strong>
                                    <br />
                                </div>
                                <p style={{marginButton: '50px;' }}>
                                    <strong  style={{ marginRight: 10 }}>Description : {item.description}</strong>
                                </p>

                                <hr style={{ marginTop : "30px" }} />
                                
                            </div> 
                        );
                    })
                }
            </div>

        </div>
    </div>
    );
}

export default SearchContent;