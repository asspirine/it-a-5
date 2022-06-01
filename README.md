# it-a-5
1) Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
2) Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
3) Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
4) Выполнить явное преобразование(number, string, boolean)


вывод консоли:
Сложение переменных различных типов:
 string + boolean(true) = some_stingtrue 
 string + number 212 = some_sting212 
 number 212 + boolean(true) = 213
 string '616' + boolean(false) = 616false 
 string '616' + number(0) = 6160 
 number(0) + boolean(false) = 0

Умножение переменных различных типов:
 string * boolean(true) = NaN 
 string * number 212 = NaN 
 number 212 * boolean(true) = 212
 string '616' * boolean(false) = 0 
 string '616' * number(0) = 0 
 number(0) * boolean(false) = 0

Деление переменных различных типов:
 string / boolean(true) = NaN 
 string / number 212 = NaN 
 number 212 / boolean(true) = 212
 string '616' / boolean(false) = Infinity 
 string '616' / number(0) = Infinity 
 number(0) / boolean(false) = NaN

Явное переменных различных типов:
Number(212) -> bool  = true
Number(0) -> bool  = false
String -> Number  = NaN
String '616' -> Number  = 616
Number 212 -> String  = '212'
Bool 'false' -> String  = 'false'
Bool 'false' -> Number  = 0
Bool 'true' -> Number  = 1
String -> bool  = true
String '0' -> bool  = true
String +'0' -> bool  = false