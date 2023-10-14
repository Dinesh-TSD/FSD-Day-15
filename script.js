//main container
let container=createtag("div","id","container")
let calcy=createtag("div","id","calculator")
let title=createtag("h1","id","title")
title.innerHTML="Calculator"
calcy.append(title)

//
let content=createbutton("p","id","description","The task is Created using Dom and css")
container.append(content)

//input
let input=document.createElement("input")
input.setAttribute("type","text")
input.setAttribute("placeholder","0")
input.setAttribute("id","result")

//buttons 19..
let clear=createbutton("button","onclick","Clear()","C")
clear.setAttribute("id","clear")
clear.setAttribute("id","clear")
let dele=createbutton("button","onclick","del()","DEL")
dele.setAttribute("id","orang")
let modulus=createbutton("button","onclick","display('%')","%")
modulus.setAttribute("id","orang")
let divi=createbutton("button","onclick","display('/')","/")
divi.setAttribute("id","orang")
let seven=createbutton("button","onclick","display('7')","7")

let eit=createbutton("button","onclick","display('8')","8")

let nine=createbutton("button","onclick","display('9')","9")
let mul=createbutton("button","onclick","display('*')","x")
mul.setAttribute("id","orang")
let four=createbutton("button","onclick","display('4')","4")
let five=createbutton("button","onclick","display('5')","5")
let six=createbutton("button","onclick","display('6')","6")
let sub=createbutton("button","onclick","display('-')","-")
sub.setAttribute("id","subtract")
let ones=createbutton("button","onclick","display('1')","1")
ones.setAttribute("id","1")
let twos=createbutton("button","onclick","display('2')","2")
twos.setAttribute("id","2")
let three=createbutton("button","onclick","display('3')","3")
three.setAttribute("id","3")
let sum=createbutton("button","onclick","display('+')","+")
sum.setAttribute("id","add")
let dot=createbutton("button","onclick","display('.')",".")
let zero=createbutton("button","onclick","display('0')","0")
let equal=createbutton("button","onclick","Calculate()","=")
equal.setAttribute("id","equal")

//append all tags 
calcy.append(input,clear,dele,modulus,divi,seven,eit,nine,mul,four,five,six,sub,ones,twos,three,sum,dot,zero,equal)
container.append(calcy)
document.body.append(container)

//funtion for tag ,attribute
function createtag(tagname,attrname,attrvalue){
    let label=document.createElement(tagname)
    label.setAttribute(attrname,attrvalue)
    return label;
}
//function for button
function createbutton(tagname,attrname,attrvalue,content){
    let label=document.createElement(tagname)
    label.innerHTML=content;
    label.setAttribute(attrname,attrvalue)
    return label;
}

//dispaly value
let outscreen=document.getElementById("result")

function display(num){
     outscreen.value += num;
}

//calculate all arithmatic operation
let one=document.getElementById("1");
let two=document.getElementById("2");
let thre=document.getElementById("3");
let add = document.getElementById('add');
let subtract = document.getElementById('subtract');

let operand1 = one.textContent;
let operand2 = two.textContent;
let operand3=thre.textContent;
let operator = add.textContent;
let operatorsub = subtract.textContent;

let arradd=[operand1,operator,operand2]
let addres=arradd.join("");

let arrsub=[operand3,operatorsub,operand1]
let subres=arrsub.join("");

function Calculate(){
    try {
        outscreen.value = eval(outscreen.value)
    } catch (err) {
        alert("Invalid")
    }

}
//clear display
function Clear(){
    outscreen.value = "";
}
//reduce the display value one by one
function del(){
    outscreen.value = outscreen.value.slice(0,-1);
}

