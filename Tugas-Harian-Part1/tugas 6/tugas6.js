//soal1
const luasLingkaran = (jari) => {
    return 22/7*jari*jari;
}

const kelLingkaran = (jari) => {
    return 22/7*jari*2
}

const luasLingkaran1 = luasLingkaran(7);
const kelLingkaran1 = kelLingkaran(7);
console.log("---------- Soal 1 --------");
console.log(luasLingkaran1);
console.log(kelLingkaran1);


//soal2

const introduce = (...words) => {
    const [name, age, gender, job] = words;
    return `Pak ${name} adalah seorang ${job} yang berusia ${age} tahun`;
}

const perkenalan = introduce("John", "30", "Laki-Laki", "penulis");
console.log("---------- Soal 2 --------");
console.log(perkenalan);

//soal 3

const newFunction = function literal(firstName, lastName){
    return {firstName,lastName, fullName : () => {console.log(`${firstName} ${lastName}`);}}
}
console.log("---------- Soal 3 --------");
console.log(newFunction("John", "Doe").firstName)
console.log(newFunction("Richard", "Roe").lastName)
newFunction("William", "Imoh").fullName()

//soal4

let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
    colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}

const{name : phoneName, brand : phoneBrand , year} = phone;
const {[2] : colorBlack, [0] : colorBronze} = phone.colors;
console.log("---------- Soal 4 --------");
console.log(phoneBrand, phoneName, year, colorBlack, colorBronze); 


//soal5
console.log("---------- Soal 5 --------");
let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
    penulis: "john doe",
    tahunTerbit: 2020 
}

let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172,
    warnaSampul:["hitam"]
}

buku.warnaSampul.push(...warna);
let newBook = {...buku, ...dataBukuTambahan};
console.log(newBook);
console.log("Thanks ........");