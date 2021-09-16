import React from "react";
import { useHistory} from 'react-router-dom';
import FormMahasiswa from "./formMahasiswa.js";


const DataMahasiswa3 = () => {
    let history = useHistory();

    function handleBack(){
        history.push("/tugas14");
    }

    return (
        <>
            <div type="button" className="tambah_data" onClick={handleBack}> -- Kembali</div>
            <FormMahasiswa />
        </>
    );
}

export default DataMahasiswa3;