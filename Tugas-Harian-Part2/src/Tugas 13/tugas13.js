import './tugas13.css';
import {useState, useEffect, createContext } from 'react';
import axios from "axios";


export const mahasiswaContext = createContext();

function Tugas13(props){
    const [mahasiswa, setMahasiswa ] = useState([]);
    const [currentId, setCurrentId] =  useState(null);
    const [nama, setNama] = useState("");
    const [course, setCourse] = useState("");
    const [score, setScore] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://backendexample.sanbercloud.com/api/student-scores');
            setMahasiswa(result.data.map(x => { return {id:x.id , name: x.name, course : x.course, score: x.score}}));
        }
        fetchData();
    }, []);

    


    const context = {
        mahasiswa,
        setMahasiswa ,
        currentId,
        setCurrentId,
        nama,
        setNama,
        course,
        setCourse,
        score,
        setScore
    }

    return(
        <mahasiswaContext.Provider value={context}>
            {props.children}
        </mahasiswaContext.Provider>
        
        
    );
    }
    


export default Tugas13;

