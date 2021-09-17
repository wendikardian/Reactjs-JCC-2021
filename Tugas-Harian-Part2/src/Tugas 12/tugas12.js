import './tugas12.css';
import {useState, useEffect} from 'react';
import axios from "axios";

function Tugas12(){
    const [mahasiswa, setMahasiswa ] = useState([]);
    const [nama, setNama] = useState("");
    const [course, setCourse] = useState("");
    const [score, setScore] = useState("");
    const [currentId, setCurrentId] =  useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://backendexample.sanbercloud.com/api/student-scores');
            setMahasiswa(result.data.map(x => { return {id:x.id , name: x.name, course : x.course, score: x.score}}));
        }
        fetchData();
    }, []);

    
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
            }
}
    const handleEdit = (event) => {
        let idPeserta = event.target.value;
        axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${idPeserta}`)
        .then(res => {
            let data = res.data;
            setNama(data.name);
            setCourse(data.course);
            setScore(data.score);
            setCurrentId(data.id)
        })
    }
    const handleDelete = (event) => {
        let idPeserta = parseInt(event.target.value);
        axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${idPeserta}`)
        .then(() => {
            let newMahasiswa = mahasiswa.filter(x => {return x.id !== idPeserta;})
            setMahasiswa(newMahasiswa);
        })
    }

    return(
        <div>
        <h1>Data Nilai Mahasiswa</h1>
        <table id="data">
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Mata Kuliah</th>
                    <th>Nilai</th>
                    <th>Index Nilai</th>
                    <th>Action</th>
                </tr>
            <tbody>
                {
                    mahasiswa.map((item, index) => {
                        let indexNilai ;
                        if(item.score >= 80){
                            indexNilai = "A";
                        }else if(item.score >= 70){
                            indexNilai = "B"
                        }else if(item.score >= 60){
                            indexNilai = "C"
                        }else if(item.score >= 60){
                            indexNilai = "D"
                        }else{
                            indexNilai = "E"
                        }
                        return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.course}</td>
                                <td>{item.score}</td>
                                <td>{indexNilai}</td>
                                <td>
                                    <button className=" btn green" onClick={handleEdit} value={item.id}>Edit</button>
                                    <button className=" btn red" onClick={handleDelete} value={item.id}>Delete</button>
                                </td>
                            </tr>

                        );
                    })
                }
            </tbody>
        </table>

        <h1>Form Nilai Mahasiswa</h1>
        <div className="container">
        <form onSubmit={handleSubmit} >
            <label className="label_tugas12">
            Nama:
            </label>
            <input className="form-control-jcc" type="text" value={nama} onChange={onChangeNama}  required/>
            <label className="label_tugas12">
            Mata Kuliah:
            </label>
            <input className="form-control-jcc" type="text" value={course} onChange={onChangeCourse}  required/>
            <label className="label_tugas12">
            Nilai:
            </label>
            <input className="form-control-jcc" type="number" min="0" max="100" value={score} onChange={onChangeScore}  required/>
            <button className="btn black" type="submit" value="Submit" >submit</button>
        </form>
        </div>
        
        </div>
        
        
    );
    }
    


export default Tugas12;

