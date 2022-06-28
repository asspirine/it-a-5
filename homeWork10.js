// Task1
function getRandom(NumberFrom=1,NumberTo=5){
    let timeOut = Math.floor(Math.random()*(NumberTo-NumberFrom+1)+NumberFrom);
    return timeOut;
};

let promiseOne = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(1)
    },getRandom()*1000);
});

let promiseTwo = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(2)
    },getRandom()*1000);
});

let promiseThree = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(3)
    },getRandom()*1000);
});

Promise.race([promiseOne,promiseTwo,promiseThree])
.then((data)=>{
    console.log(data);
});



// Task2
function getNum(resolvedResult,timeOut){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(resolvedResult)
        },timeOut);
    })
};

async function getSquareOfNumber(number){
    console.log(Math.pow(await number,2));
};
getSquareOfNumber(getNum(getRandom(),3000));



// Task3:  решил не создовать getNum1 и getNum2 - вместо этого сделал getNum  более универсальным.
async function getSummOfNumbers(num1,num2){
    console.log(await num1 + await num2)
}
getSummOfNumbers(getNum(getRandom(),3000),getNum(getRandom(6,10),5000))


