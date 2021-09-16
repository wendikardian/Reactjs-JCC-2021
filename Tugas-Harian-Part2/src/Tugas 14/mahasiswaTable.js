import React from "react";
import TabelMahasiswa2 from "./tableMahasiswa.js";
import {Link} from 'react-router-dom';



const DataMahasiswa2 = () => {
    return (
        <>
        
            <Link to="/tugas14/tambah"><div className="tambah_data"> + Data Mahasiswa</div></Link>
            <TabelMahasiswa2 />
            {/* <FormMahasiswa /> */}
        </>
    );
}

export default DataMahasiswa2;