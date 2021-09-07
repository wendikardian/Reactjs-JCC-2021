// soal1
class Animal{

    constructor(name){
        this.legs = 4;
        this.cold_blooded = false;
        this.name = name;
    }
}

var sheep = new Animal("shaun");

console.log("-----Soal 1-------");
console.log("-----Release 0-------");
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
sheep.legs = 3
console.log(sheep.legs);

console.log("-----Release 1-------");

class Frog extends Animal{
    constructor(name){
        super(name);
    }

    jump(){
        return "hop hop";
    }
}

class Ape extends Animal{
    constructor(name){
        super(name);
        this.legs = 2;
    }

    yell(){
        return "Auooo"
    }
}

var sungokong = new Ape("kera sakti");
sungokong.yell() // "Auooo"
// sungokong.legs = 2
console.log(sungokong.name);
console.log(sungokong.legs);
console.log(sungokong.cold_blooded);

var kodok = new Frog("buduk");
kodok.jump() // "hop hop"
console.log(kodok.name);
console.log(kodok.legs);
console.log(kodok.cold_blooded);


// Soal 2

class Clock {
    constructor({template}){
        this.template = template;
    }
    render(){
        var date = new Date();
        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this.template.replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
        console.log(output);
    }

    stop(){
        clearInterval(this.timer)
    }

    start(){
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }


}
console.log("-----Soal 2-------");
var clock = new Clock({template: 'h:m:s'});
clock.start();  
