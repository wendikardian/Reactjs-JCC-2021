//soal 1    
    
    var kataPertama = "saya";
    var kataKedua = "senang";
    var kataKetiga = "belajar";
    var kataKeempat = "javascript";
    
    console.log(kataPertama + " " + kataKedua + " " + kataKetiga + " "+  kataKeempat.toUpperCase() );


//soal 2

var panjangPersegiPanjang = "8";
var lebarPersegiPanjang = "5";

var alasSegitiga= "6";
var tinggiSegitiga = "7";

var kelilingPersegiPanjang = (parseInt(panjangPersegiPanjang) * 2) + (parseInt(lebarPersegiPanjang) * 2);
var luasSegitiga = parseInt(alasSegitiga) * parseInt(tinggiSegitiga) / 2;

console.log(kelilingPersegiPanjang);
console.log(luasSegitiga);

//soal 3

var sentences= 'wah javascript itu keren sekali'; 

var firstWord= sentences.substring(0, 3); 
var secondWord = sentences.substring(4,14);
var thirdWord = sentences.substring(15, 18); 
var fourthWord = sentences.substring(19, 24);
var fifthWord = sentences.substring(25); 

console.log('Kata Pertama: ' + firstWord); 
console.log('Kata Kedua: ' + secondWord); 
console.log('Kata Ketiga: ' + thirdWord); 
console.log('Kata Keempat: ' + fourthWord); 
console.log('Kata Kelima: ' + fifthWord);

//soal 4
var nilaiJohn = 80;
var nilaiDoe = 50;
var indexNilaiJohn ;
var indexNilaiDoe ;

if(nilaiJohn >= 80){
    indexNilaiJohn = "A";
}else if(nilaiJohn >= 70){
    indexNilaiJohn = "B";
}else if(nilaiJohn >= 60){
    indexNilaiJohn = "C";
}else if(nilaiJohn >= 50){
    indexNilaiJohn = "D";
}else{
    indexNilaiJohn = "E";
}

if(nilaiDoe >= 80){
    indexNilaiDoe = "A";
}else if(nilaiDoe >= 70){
    indexNilaiDoe = "B";
}else if(nilaiDoe >= 60){
    indexNilaiDoe = "C";
}else if(nilaiDoe >= 50){
    indexNilaiDoe = "D";
}else{
    indexNilaiDoe = "E";
}

console.log(indexNilaiJohn)
console.log(indexNilaiDoe)

//soal 5

var tanggal = 14;
var bulan = 9;
var tahun = 2002;

switch(bulan){
    case 1: {
        console.log(tanggal + " Januari " + tahun);
        break;
    }case 2: {
        console.log(tanggal + " Februari " + tahun);
        break;
    }case 3: {
        console.log(tanggal + " Maret " + tahun);
        break;
    }case 4: {
        console.log(tanggal + " April " + tahun);
        break;
    }case 5: {
        console.log(tanggal + " Mei " + tahun);
        break;
    }case 6: {
        console.log(tanggal + " Juni " + tahun);
        break;
    }case 7: {
        console.log(tanggal + " Juli " + tahun);
        break;
    }case 8: {
        console.log(tanggal + " Agustus " + tahun);
        break;
    }case 9: {
        console.log(tanggal + " September " + tahun);
        break;
    }case 10: {
        console.log(tanggal + " Oktober " + tahun);
        break;
    }case 11: {
        console.log(tanggal + " Novemmber " + tahun);
        break;
    }case 12: {
        console.log(tanggal + " Desember " + tahun);
        break;
    }default : {
        console.log("Bulan tidak tersedia");
        break;
    }
}

// Maaf kak sebelumnya saya sebelumnya waktu upload tugas ke 2 salah mengatur foldernya, nanti ketikas
//sudah diperiksa dan dinilai, struktur foldernya akan saya perbaiki, terimakasih, mohon maaf atas salahnya