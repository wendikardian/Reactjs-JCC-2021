/* eslint-disable no-undef */
import './tugas14.css';
import { mahasiswaContext } from './tugas14.js';
import { useContext } from 'react';
import { useHistory} from 'react-router-dom';
import axios from "axios";


function FormMahasiswa2(props){
    let history = useHistory();
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
                    setCurrentId(null);
                    history.push("/tugas14");
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
                }
                )
                history.push("/tugas14");
            }
}

    return (
        
        <div>

        <h1>Form Nilai Mahasiswa</h1>
        <div className="container">
        <form onSubmit={handleSubmit} >
            <label className="label_tugas14">
            Nama:
            </label>
            <input type="text" className="form-control-jcc" value={nama} onChange={onChangeNama}  required/>
            <label className="label_tugas14">
            Mata Kuliah:
            </label>
            <input type="text" className="form-control-jcc" value={course} onChange={onChangeCourse}  required/>
            <label className="label_tugas14">
            Nilai:
            </label>
            <input type="number" min="0" className="form-control-jcc" max="100" value={score} onChange={onChangeScore}  required/>
            <button className="btn black" type="submit" value="Submit" >submit</button>
        </form>
        </div>
        
        </div>
        
    )
}


export default FormMahasiswa2;