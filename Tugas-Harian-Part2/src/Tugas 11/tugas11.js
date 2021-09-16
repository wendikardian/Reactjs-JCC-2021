import './tugas11.css';
import {useState} from 'react';

function Tugas11(){

    var daftarBuah = [
        {nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
        {nama: "Manggis", hargaTotal: 350000, beratTotal: 10000},
        {nama: "Nangka", hargaTotal: 90000, beratTotal: 2000},
        {nama: "Durian", hargaTotal: 400000, beratTotal: 5000},
        {nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000}
        ];
    const [buah, setBuah] = useState(daftarBuah);
    const [inputNamaBuah, setInputNamaBuah] = useState("");
    const [inputHargaTotal, setInputHargaTotal] = useState("");
    const [inputBeratTotal, setInputBeratTotal] = useState("");
    const [currentIndex, setCurrentIndex] = useState(-1)

    const handleChangeNama = (event) => {
        event.preventDefault();
        setInputNamaBuah(event.target.value)
    }

    const handleChangeHarga = (event) => {
        event.preventDefault();
        setInputHargaTotal(event.target.value)
    }

    const handleChangeBeratTotal = (event) => {
        event.preventDefault();
        setInputBeratTotal(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let newDataBuah = buah;
        if(currentIndex === -1) {
            if(inputBeratTotal >= 2000){
            const inputBaru = {
            nama : inputNamaBuah,
            hargaTotal : inputHargaTotal,
            beratTotal : inputBeratTotal
        }
            newDataBuah = [...buah, inputBaru ]
        }else{
            window.alert("Min input 2000");
        }
        }else{
            if(inputBeratTotal >= 2000){
            newDataBuah[currentIndex] = {
                nama : inputNamaBuah,
                hargaTotal : inputHargaTotal,
                beratTotal : inputBeratTotal
            }
            }else{
                window.alert("Min input 2000");
            }
        }
        setBuah(newDataBuah);
        setInputHargaTotal("");
        setInputBeratTotal("");
        setInputNamaBuah("");
        setInputNamaBuah("");
        setCurrentIndex(-1);
    }

    const handleDelete = (event) => {
        let index = parseInt(event.target.value);
        let deleteValue = buah[index];
        let newBuah = buah.filter((buah) => buah !== deleteValue);
        setBuah(newBuah);
    }

    const handleEdit= (event) => {
        let index = parseInt(event.target.value);
        let value = buah[index];
        setInputNamaBuah(value.nama);
        setInputHargaTotal(value.hargaTotal)
        setInputBeratTotal(value.beratTotal)
        setCurrentIndex(index);

    }
    return(
        <div>
        <h1>Daftar harga buah</h1>
        <table id="buah">
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Harga Total</th>
                    <th>Berat Total</th>
                    <th>Harga perKG</th>
                    <th>Action</th>
                </tr>
            <tbody>
                {
                    buah.map((val, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{val.nama}</td>
                                <td>{val.hargaTotal}</td>
                                <td>{val.beratTotal/1000} KG</td>
                                <td>{val.hargaTotal / (val.beratTotal/1000)}</td>
                                <td>
                                    <button className=" btn green" onClick={handleEdit} value={index}>Edit</button>
                                    <button className=" btn red" onClick={handleDelete} value={index}>Delete</button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>

        <h1>Form Daftar harga Buah</h1>
        <div className="container_tugas11">
        <form onSubmit={handleSubmit}>
            <label class="tugas11_label">
            Nama:
            </label>
            <input type="text" value={inputNamaBuah} onChange={handleChangeNama} required/>
            <label class="tugas11_label">
            Harga Total:
            </label >
            <input type="text" value={inputHargaTotal} onChange={handleChangeHarga} required/>
            <label class="tugas11_label">
            Berat Total (dalam gram):
            </label>
            <input type="text" value={inputBeratTotal} onChange={handleChangeBeratTotal} required/>
            <button className="btn blue" type="submit" value="Submit" >submit</button>
        </form>
        </div>
        
        </div>
        
        
    );
}

export default Tugas11;

