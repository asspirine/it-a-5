let str1 = '206008', sum1 = 0, sum2 = 0;
const arr1 = str1.split('').map(num => num = Number(num)); 
if (arr1.length%2==0){
    for (let i=0;i<arr1.length;i++){
        if (i<(arr1.length/2)){
            sum1 += arr1[i]
        }
        else{
            sum2 += arr1[i]
        }
    }
    if(sum1==sum2){
        console.log("Да!")
    }
    else{
        console.log("Нет(")
    }
}



let n=1000, i=0;
do {
    n=n/2;
    i++;
    }
while  (n>50)
console.log(`1000 devided by two ${i} times equals ${n}`)



let arr2=[12, 15, 20, 25, 59, 79], sum=0, average=0, altAverage=0;
arr2.forEach(element => {
    sum+=element
});
average=sum/arr2.length;
console.log(`average of array equals: ${average}`)
altAverage=arr2.reduce(function(a,b){return a+b})/arr2.length
console.log(`alternative average of array equals: ${altAverage}`)



let arr3=[1, 2, 3, 4, 5];
arr3.splice(3, 0, 'a','b','c');
console.log(arr3);



let arr4=[1, 2, 3, 4, 5];
arr4.splice(1, 0, 'a', 'b');
arr4.splice(6, 0, 'c');
arr4.push('e');
console.log(arr4);



let arr5=[3, 4, 1, 2, 7];
arr5.sort((a, b) => a-b)
console.log(arr5)
arr5.sort((a, b) => b-a)
console.log(arr5)