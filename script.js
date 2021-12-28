
//#region - Operator Function
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
        return a/b;
}

function operate(a,b,o){
    a = Number(a);
    b = Number(b);

    switch(o){
        case "+":
            return Math.round(add(a,b)*100000000)/100000000;
        case "-":
            return Math.round(subtract(a,b)*100000000)/100000000;
        case "x":
            return Math.round(multiply(a,b)*100000000)/100000000;
        case "/":
            return Math.round(divide(a,b)*100000000)/100000000;
    }
}
//#endregion

//#region - Button addEventListener
// 1-9,0
const num1 = document.querySelector('.num1');
num1.addEventListener('click', ()=>numButton('1'));

const num2 = document.querySelector('.num2');
num2.addEventListener('click', ()=>numButton('2'));

const num3 = document.querySelector('.num3');
num3.addEventListener('click', ()=>numButton('3'));

const num4 = document.querySelector('.num4');
num4.addEventListener('click', ()=>numButton('4'));

const num5 = document.querySelector('.num5');
num5.addEventListener('click', ()=>numButton('5'));

const num6 = document.querySelector('.num6');
num6.addEventListener('click', ()=>numButton('6'));

const num7 = document.querySelector('.num7');
num7.addEventListener('click', ()=>numButton('7'));

const num8 = document.querySelector('.num8');
num8.addEventListener('click', ()=>numButton('8'));

const num9 = document.querySelector('.num9');
num9.addEventListener('click', ()=>numButton('9'));

const num0 = document.querySelector('.num0');
num0.addEventListener('click', ()=>numButton('0'));

const numFloat = document.querySelector('.numF');
numFloat.addEventListener('click', ()=>numButton('.'));

//operators
const opA = document.querySelector('.opA');
opA.addEventListener('click', ()=>opButton('+'));

const opS = document.querySelector('.opS');
opS.addEventListener('click', ()=>opButton('-'));

const opM = document.querySelector('.opM');
opM.addEventListener('click', ()=>opButton('x'));

const opD = document.querySelector('.opD');
opD.addEventListener('click', ()=>opButton('/'));

const opE = document.querySelector('.opE');
opE.addEventListener('click', ()=>equal());

//clear and delete
const clear = document.querySelector('.clear');
clear.addEventListener('click', ()=>opClear());

const del = document.querySelector('.delete');
del.addEventListener('click', ()=>opDelete()); 

//#endregion

//#region - Button Operation 
let firstNum = '';
let userInput ='';
let op = '';

function numButton(a){
    if (a == '.' && !userInput.includes('.')){
        userInput += a;
        display2(userInput);
    } else if (a!='.'){
        userInput += a;
        display2(userInput);
    }
}

function display1(a){
    document.querySelector('.display1').innerHTML=`${a}`;
}

function display2(a){
    document.querySelector('.display2').innerHTML=`${a}`;
}


function opButton(a){
    if (firstNum ==''){
        firstNum = userInput;
        userInput = '';
        op = a;
        display1(`${firstNum}${op}`);
    } else if (firstNum != '' && userInput == ''){
        op = a;
        display1(`${firstNum}${a}`);
        display2(firstNum);
    }else{
        firstNum = operate(firstNum, userInput, op);
        userInput = '';
        op = a;
        display1(`${firstNum}${a}`);
        display2(firstNum);
    }
}

function equal(){
    if (userInput == '0' && op == '/'){
        alert('Error, cannot divide by 0');
        opClear();

    } else if (userInput != '' && firstNum != '' && op != ''){
        display1(`${firstNum}${op}${userInput}`);
        userInput = operate(firstNum, userInput, op);
        firstNum = '';
        op = '';
        display2(userInput);
    }
}

function opClear(){
    userInput = '';
    firstNum = '';
    op = '';
    display1('');
    display2('');
}

function opDelete(){
    if(userInput != ''){
        userInput = userInput.toString().slice(0,-1);
        console.log(userInput);
        display2(userInput);
    }
}

//#endregion

//#region - Keyboard Support
document.addEventListener('keydown', function(e){
    if(e.key==='0' || e.key==='1' ||e.key==='2' || e.key==='3' || e.key==='4' || e.key==='5' || e.key==='6' || e.key==='7' || e.key==='8' || e.key==='9' || e.key === '.') numButton(e.key);
    if(e.key==='Enter'||e.key==='=') equal();
    if(e.key==='Escape') opClear();
    if(e.key==='Backspace') opDelete();
    if(e.key==='+'||e.key==='-'||e.key==='*'||e.key==='/') opButton(e.key);
});
//#endregion

// #region - Logic
/* 
                52 | + | 33 |  =
userInput       52 |   | 33 | 85
firstNum           | 52| 52 |
op                 | + | +  |

*/
//#endregion