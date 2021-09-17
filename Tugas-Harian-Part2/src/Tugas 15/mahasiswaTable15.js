import React from "react";
import TabelMahasiswa2 from "./tableMahasiswa15.js";
import {Link} from 'react-router-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css';



const DataMahasiswaTugas15 = () => {
    return (
        <>
            <h1>Data Mahasiswa</h1>
            <Link to="/tugas15/tambah">
                {/* <div className="tambah_data"> + Data Mahasiswa</div> */}
            <Button type="primary" className="tambah_data">+ Data Mahasiswa</Button>
            </Link>
            <TabelMahasiswa2 />
            {/* <FormMahasiswa /> */}
        </>
    );
}

export default DataMahasiswaTugas15;