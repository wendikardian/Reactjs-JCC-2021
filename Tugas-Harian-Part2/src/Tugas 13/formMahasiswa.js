/* eslint-disable no-undef */
import './tugas13.css';
import { mahasiswaContext } from './tugas13';
import { useContext } from 'react';
import axios from "axios";


function FormMahasiswa(props){

    
    const {mahasiswa, setMahasiswa, currentId, setCurrentId, nama, setNama, course, setCourse, score, setScore} = useContext(mahasiswaContext);
    
    const onChangeNama = (event) => {
        setNama(event.target.value);
    }
    const onChangeCourse = (event) => {
        setCourse(event.target.value);
    }

    const onChangeScore = (event) => {
        setScore(parseInt(event.target.value));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(currentId === null){
                let data = {
                    name : nama,
                    course : course,
                    score : score
                };
                axios.post("http://backendexample.sanbercloud.com/api/student-scores", data)
                .then(response => {
                    let uploadedData = response.data;
                    console.log(uploadedData);
                    let newData = {
                        id :uploadedData.id,
                        name :uploadedData.name,
                        course : uploadedData.course,
                        score : uploadedData.score
                    }
                    setMahasiswa([ ...mahasiswa, newData]);
                    setNama("");
                    setCourse("");
                    setScore("");
                })
            }else{
                let data =
                    {name : nama,
                    course : course, score : score}
                axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`, data)
                .then(() => {
                    let filterMahasiswa = mahasiswa.find(x => x.id === currentId);
                    filterMahasiswa.name = nama;
                    filterMahasiswa.course = course;
                    filterMahasiswa.score = score;
                    setMahasiswa([...mahasiswa])
                    setCurrentId(null);
                }
                )
            }
}

    return (
        
        <div>

        <h1>Form Nilai Mahasiswa</h1>
        <div className="container">
        <form onSubmit={handleSubmit} >
            <label>
            Nama:
            </label>
            <input type="text" value={nama} onChange={onChangeNama}  required/>
            <label>
            Mata Kuliah:
            </label>
            <input type="text" value={course} onChange={onChangeCourse}  required/>
            <label>
            Nilai:
            </label>
            <input type="number" min="0" max="100" value={score} onChange={onChangeScore}  required/>
            <button className="btn black" type="submit" value="Submit" >submit</button>
        </form>
        </div>
        
        </div>
        
    )
}


export default FormMahasiswa;