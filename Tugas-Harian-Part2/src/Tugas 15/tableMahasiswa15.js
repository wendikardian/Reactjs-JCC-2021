import './tugas15.css';
import { mahasiswaContext } from './../Tugas 14/tugas14.js';
import { useContext } from 'react';
import { useHistory} from 'react-router-dom';
import axios from "axios";
import { Table, Space, message, Button } from 'antd';
import 'antd/dist/antd.css';


function TabelMahasiswaTugas15 (){
    let history = useHistory();

    const {mahasiswa, setMahasiswa, currentId, setCurrentId, nama, setNama, course, setCourse, score, setScore} = useContext(mahasiswaContext);
    console.log(useContext(mahasiswaContext))
    const handleEdit = (id) => {
        let idPeserta = id;
        const mahasiswaData = mahasiswa[idPeserta];
        const idMahasiswa  = mahasiswaData["id"];
        console.log(idMahasiswa);

        
        axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`)
        .then(res => {
            let data = res.data;
            console.log(data)
            setNama(data.name);
            setCourse(data.course);
            setScore(data.score);
            setCurrentId(data.id)
            history.push("/tugas15/tambah");
        })
        
    }
    const handleDelete = (id) => {
        let idPeserta = id;
        const mahasiswaData = mahasiswa[idPeserta];
        const idMahasiswa  = mahasiswaData["id"];
        console.log(idMahasiswa);
        
        axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`)
        .then(() => {
            let newMahasiswa = mahasiswa.filter(x => {return x.id !== idMahasiswa;})
            setMahasiswa(newMahasiswa);
            message.success("Data telah dihapus");
        })
    }
    console.log(mahasiswa);
    const columns = [
                {
                    title: 'Nama',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'Mata Kuliah',
                    dataIndex: 'course',
                    key: 'course',
                },
                {
                    title: 'Nilai',
                    dataIndex: 'score',
                    key: 'score',
                },{
                title: 'Index',
                key: 'score',
                dataIndex: 'score',
                Index : 1 ,
                render : score => (
                    <>
                        {score >= 80 ? "A" : score >= 70 ? "B" : score >= 60 ? "C" : score >= 50 ? "D" : "E"}
                    </>
                ),
    },
                {
                    title: 'Action',
                    key: 'action',
                    render: (text, record, id) => (
                    <Space size="middle">
                        {/* <a value={id} onClick={handleEdit}>Edit</a> */}
                        <Button type="primary"><a value={id} onClick={() => handleEdit(id)}>Edit</a></Button>
                        <Button type="danger"><a value={id} onClick={() => handleDelete(id)}>Delete</a></Button>
                    </Space>
                    ),
                },
                
                ];


    return (
        <>

        <Table columns={columns} dataSource={mahasiswa} />
        {/* <h1>Data Nilai Mahasiswa Tugas 15</h1>
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
        </table> */}
        </>
    );

}

export default TabelMahasiswaTugas15;