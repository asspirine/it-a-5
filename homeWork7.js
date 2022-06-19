let dice = {
    name: 'Octahedron',
    sides : 8
};

let player1 = {
    name: 'Evgeniy',
    age: 19,
    diceRoll: function(sidesOfDice){
        return(Math.floor(Math.random() * (sidesOfDice - 1 + 1)) + 1)
    }
};

let player2 ={};
player2.__proto__ = player1;
player2.name='Daniil';
player2.age=18;

function playGame(dice,pl1,pl2){
        let sum1=[], sum2=[];
        for (let i=0;i<=5;i++){
            if(i%2===0){
                sum1.push(pl1.diceRoll(dice.sides));
                console.log(`----${pl1.name} rolled the dice and got a result${sum1.length}: ${sum1[(sum1.length)-1]}`) ;
            }
            else{
                sum2.push(pl1.diceRoll(dice.sides));
                console.log(`-${pl2.name} rolled the dice and got a result${sum2.length}: ${sum2[(sum2.length)-1]}`) ;
            }
        };

        sum1=sum1.reduce((a,b) => a+b); 
        sum2=sum2.reduce((a,b) => a+b);

        if (sum1>sum2){
            console.log(`${pl1.name} Wins withs score: ${sum1} \n${pl2.name} Loses with score ${sum2}`);
        }
        else if (sum2>sum1){
            console.log(`${pl2.name} Wins withs score: ${sum2} \n${pl1.name} Loses with score ${sum1}`);
        }
        else{
            console.log(`Awesome! players score is equale!`);
        };
    };

playGame(dice,player1,player2);





let date = new Date(Date.UTC(2000,00,01));
let today = new Date(Date.now());

function countFriday(dateFrom,dateTo){
    let count = 0;
    let tempDate = new Date(dateFrom);
    for (let i=tempDate.getUTCFullYear();i<=dateTo.getUTCFullYear();i++){
        for(let j=0;j<=11;j++){
            tempDate.setUTCFullYear(i,j,13)
            if(tempDate<dateTo){
                if(tempDate.getDay()===5){
                    count++;
                }

            }
            else break;
        }
            
    }
    return count;
}

console.log(`Fridays thirteenth was: ${countFriday(date,today)}`);





let num=1523, parts=4, resultIsInteger=false;

function splitNumberToNumers(resultIsInteger,num,parts){
    let ans =[];
    tempNum=num;
    
    if(resultIsInteger){
        for (i=0;i<parts-1;i++){
            ans.push(Math.floor(Math.random()*(tempNum-0))+0)
            tempNum=tempNum-ans[i]
        }
        ans.push(tempNum)
    }
    else{
        for (i=0;i<parts-1;i++){
            ans.push((Math.random()*(tempNum-0)).toFixed(2))
            tempNum=tempNum-ans[i]
        }
        ans.push(tempNum.toFixed(2))
    }
    return ans;
}

console.log(splitNumberToNumers(resultIsInteger,num,parts));
