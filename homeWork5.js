let str='some_sting', bool=true, num=212, 
    str2='616', bool2=false, num2=0;
    
console.log("Сложение переменных различных типов:");
console.log(` string + boolean(true) = ${str+bool} \n string + number 212 = ${str+num} \n number 212 + boolean(true) = ${num+bool}`);
console.log(` string '616' + boolean(false) = ${str2+bool2} \n string '616' + number(0) = ${str2+num2} \n number(0) + boolean(false) = ${num2+bool2}\n`);

console.log("Умножение переменных различных типов:");
console.log(` string * boolean(true) = ${str*bool} \n string * number 212 = ${str*num} \n number 212 * boolean(true) = ${num*bool}`);
console.log(` string '616' * boolean(false) = ${str2*bool2} \n string '616' * number(0) = ${str2*num2} \n number(0) * boolean(false) = ${num2*bool2}\n`);

console.log("Деление переменных различных типов:");
console.log(` string / boolean(true) = ${str/bool} \n string / number 212 = ${str/num} \n number 212 / boolean(true) = ${num/bool}`);
console.log(` string '616' / boolean(false) = ${str2/bool2} \n string '616' / number(0) = ${str2/num2} \n number(0) / boolean(false) = ${num2/bool2}\n`);


console.log("Явное переменных различных типов:");
console.log(`Number(212) -> bool  = ${Boolean(num)}`);
console.log(`Number(0) -> bool  = ${Boolean(num2)}`);

console.log(`String -> Number  = ${Number(str)}`);
console.log(`String '616' -> Number  = ${Number(str2)}`);

console.log(`Number 212 -> String  = '${String(num)}'`);

console.log(`Bool 'false' -> String  = '${String(bool2)}'`);
console.log(`Bool 'false' -> Number  = ${Number(bool2)}`);
console.log(`Bool 'true' -> Number  = ${Number(bool)}`);

console.log(`String -> bool  = ${Boolean(str)}`);
console.log(`String '0' -> bool  = ${Boolean('0')}`);
console.log(`String +'0' -> bool  = ${Boolean(+'0')}`);