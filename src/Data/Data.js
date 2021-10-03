import {useState, createContext, useEffect} from 'react';
import axios from 'axios';

export const DataCtx = createContext();
const DataApp = (props) => {
    const [movie, setMovie] = useState([]);
    const [game, setGame] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        const fetchMovie = async () => {
            const movieResult = await axios.get(`https://backendexample.sanbersy.com/api/data-movie`);
            setMovie(movieResult.data.map(x => { return {id: x.id, title: x.title, description: x.description, year: x.year, duration: x.duration, genre: x.genre, rating: x.rating, review: x.review, image_url: x.image_url}} ))
            }
        const fetchGame = async () => {
            const gameResult = await axios.get(`https://backendexample.sanbersy.com/api/data-game`);
            setGame(gameResult.data.map(x => {return {id : x.id, name : x.name, genre: x.genre, singlePlayer: x.singlePlayer, multiPlayer: x.multiplayer, platform: x.platform, release : x.release, image_url: x.image_url}}))
            
        }
        fetchGame();
        fetchMovie();
        
    }, [])

    const context = {movie, setMovie, game, setGame, isLogin, setIsLogin
    }

    return(
        <DataCtx.Provider value={context}> 
            {props.children}
        </DataCtx.Provider>
    )

}

export default DataApp;