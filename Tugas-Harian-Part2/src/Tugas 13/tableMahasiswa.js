import './tugas13.css';
import { mahasiswaContext } from './tugas13';
import { useContext } from 'react';
import axios from "axios";


function TabelMahasiswa (){
    

    const {mahasiswa, setMahasiswa, currentId, setCurrentId, nama, setNama, course, setCourse, score, setScore} = useContext(mahasiswaContext);
    console.log(useContext(mahasiswaContext))
    
    const handleEdit = (event) => {
        let idPeserta = event.target.value;
        axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${idPeserta}`)
        .then(res => {
            let data = res.data;
            console.log(data)
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
    


    return (
        <>
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
        </>
    );

}

export default TabelMahasiswa;