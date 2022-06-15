function getReverseArray(arr){
    let tempArr = [];
    arr.forEach((element)=>tempArr.unshift(element));
    return tempArr;
}
let arr = [13,'2asd',3,'41rf'];
console.log(getReverseArray(arr));




function getMaxNumberFromArray(arr){
    let tempArr=[];
    arr.forEach((element)=>tempArr.push(element))
    tempArr = sortingArray(tempArr,false);
    return tempArr[0];
}
let arr2 = [3,67,15,20,41,1984,24,5,6,21,23,4,53,221];
console.log(getMaxNumberFromArray(arr2));




function getFibonacciNumber(fromNumber,resultArrLength){
    if(typeof resultArr === 'undefined')
    {
        resultArr = [0,1];
    }
    resultArr.push(resultArr.reduce(function(prevVallue,curValue,curIndex){
        if(curIndex>=resultArr.length-2){
            return prevVallue+curValue;
        }  
        else return 0;
    }))
    
    if(resultArr.length<fromNumber+resultArrLength){
        getFibonacciNumber(fromNumber,resultArrLength);
    };
    return resultArr.slice(fromNumber,resultArrLength+fromNumber);
}
let arr3=getFibonacciNumber(15,5); 
console.log(arr3);




function compareTwoNumbers(num1,num2){
    let equalsPositionAndValue=0;
    let equalsOnlyValue=0;
    num1=num1.toString().split('').map((num)=> Number(num));
    num2=num2.toString().split('').map((num)=> Number(num));
    num1.forEach((element, index) => {
        element===num2[index]?equalsPositionAndValue++:{};
    });
    num2.forEach((element) => {
        num1.includes(element)?equalsOnlyValue++:{};
    });
    return [equalsPositionAndValue,equalsOnlyValue];
}
console.log(compareTwoNumbers(1984,4981));




function sortingArray(arr,sortingAsc=true){
    arr.sort((a,b) => a-b)
    if(sortingAsc){
        return arr
    }else{
        return getReverseArray(arr)
    }
}
let arr4=[109,24,35,14,45,6,16,15,144,13,22,41]
console.log(sortingArray(arr4,false))




function removeDuplicatesFromArray(arr){
    arr.forEach(function(element,index){
        if(arr.includes(element,index+1)&&element!==undefined){
            while (arr.indexOf(element,index+1)!==-1){
                arr[arr.indexOf(element)]=undefined
            }
        }
    })
    return arr.filter(element => element!==undefined)
}
let arr5=[109,24,35,14,45,6,16,15,144,15,24,45,14];
console.log(arr5=removeDuplicatesFromArray(arr5));