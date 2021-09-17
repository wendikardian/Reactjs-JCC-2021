import React from "react";
import { useHistory} from 'react-router-dom';
import FormMahasiswa from "./formMahasiswa15.js";
// import { Button } from 'antd';
// import 'antd/dist/antd.css';


const DataMahasiswa2Tugas15 = () => {
    let history = useHistory();

    function handleBack(){
        history.push("/tugas15");
    }

    return (
        <>
            {/* <Button type="primary" className="tambah_data" onClick={handleBack}>Back</Button> */}
            <div type="button" className="tambah_data" onClick={handleBack}> -- Kembali</div>
            <FormMahasiswa />
        </>
    );
}

export default DataMahasiswa2Tugas15;