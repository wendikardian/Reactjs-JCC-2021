//soal 1

console.log("Looping Pertama");
var angkaPertama = 2;
while(angkaPertama <= 20){
    console.log( angkaPertama + " - I love coding");
    angkaPertama += 2;
}

console.log("Looping Kedua");
var angkaKedua = 20;
while(angkaKedua >= 2){
    console.log(angkaKedua + " - I will become a front end developer");
    angkaKedua -= 2;
}


//soal 2

for (var i = 1; i <= 20; i ++){
    if(i % 2 == 1 && i%3 == 0) {
        console.log(i + " - I Love Coding");
    }else if(i % 2 == 0){
        console.log(i + " - Berkualitas");
    }else if(i%2 == 1){
        console.log(i + " - Santai");
    }else{
        console.log("Something went wrong");
    }
}


//soal 3
console.log("Soal no 3. Sharp triangle");
for(var sharp = "#"; sharp.length <= 7; sharp = sharp = sharp + "#"){
    console.log(sharp);
}

//soal 4
var kalimat=["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"];
kalimat.shift();
kalimat.splice(1,1);
var newKalimat = "";
for(var a in kalimat){
    newKalimat = newKalimat + kalimat[a] + " ";
}
console.log(newKalimat);


//soal 5
var sayuran=[];
sayuran.push("Kangkung", "Bayam", "Buncis", "Kubis", "Timun", "Seledri", "Tauge");
sayuran.sort();
for(var list in sayuran){
    var number = parseInt(list) + 1;
    console.log( number + ". " + sayuran[list] );
}