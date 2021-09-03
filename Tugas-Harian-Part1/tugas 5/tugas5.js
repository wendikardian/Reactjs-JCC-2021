//soal 1
function luasPersegiPanjang(panjang, lebar){
    return panjang*lebar;
}

function kelilingPersegiPanjang(panjang, lebar){
    return 2*(panjang + lebar);
}

function volumeBalok(panjang, lebar, tinggi){
    return panjang*tinggi*lebar;
}


var panjang= 12
var lebar= 4
var tinggi = 8

var luasPersegiPanjang = luasPersegiPanjang(panjang, lebar);
var kelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar);
var volumeBalok = volumeBalok(panjang, lebar, tinggi);

console.log("------ Soal 1 -------");
console.log(luasPersegiPanjang) ;
console.log(kelilingPersegiPanjang);
console.log(volumeBalok);

//soal 2

function introduce(name, age, address, hobby){
    return("Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya mempunyai hobby yaitu " + hobby + "!");
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log("------ Soal 2 -------");
console.log(perkenalan);

//soal 3

function objectConverter(value){
    return {
        "nama" : value[0],
        "jenisKelamin" : value[1],
        "hobby" : value[2],
        "tahunLahir" : value[3]
    }
}


var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992];
var arrayConverter = objectConverter(arrayDaftarPeserta);
console.log("------ Soal 3 -------");
console.log(arrayConverter);

//soal 4


function checkDataFruit(values){
    var sorted = [];
    for(value of values){
        if(value["ada bijinya"] == false){
            sorted.push(value);
        }
    }
    return sorted;
}

var fruitData = [
    {
        "nama" : "Nanas",
        "warna" : "Kuning",
        "ada bijinya" : false,
        "harga" : 9000
    },{
        "nama" : "Jeruk",
        "warna" : "Oranye",
        "ada bijinya" : true,
        "harga" : 9000
    },{
        "nama" : "Semangka",
        "warna" : "Hijau dan Merah",
        "ada bijinya" : true,
        "harga" : 10000
    },{
        "nama" : "Pisang",
        "warna" : "Kuning",
        "ada bijinya" : false,
        "harga" : 5000
    }
]
console.log("------ Soal 4 -------");
console.log(checkDataFruit(fruitData));

//soal 5 

function tambahDataFilm(nama, durasi, genre, tahun){
    var data = {
        "nama" : nama,
        "durasi" : durasi,
        "genre" : genre,
        "tahun" : tahun
    }
    dataFilm.push(data);
}

var dataFilm = [];

tambahDataFilm("LOTR", "2 jam", "action", "1999");
tambahDataFilm("avenger", "2 jam", "action", "2019");
tambahDataFilm("spiderman", "2 jam", "action", "2004");
tambahDataFilm("juon", "2 jam", "horror", "2004");
console.log("------ Soal 5 -------");
console.log(dataFilm);