var filterBooksPromise = require('./promise2.js');
filterBooksPromise(true, 40).then((results) => {
    console.log(results);
})

async function book1(){
    var result = await filterBooksPromise(false,250);
    console.log(result);
}

book1();


// filterBooksPromise(true,30).then(result => {console.log(result);}).catch(err => {console.log(err);})

async function book2(){
    try{
        var result = await filterBooksPromise(true, 30);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
book2();


