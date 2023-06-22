console.log("Hello");

const jasonElement  = '{"userNmae": "Marwa"}'
console.log ( typeof jasonElement);
console.log (jasonElement);

const jsElement = JSON.parse(jasonElement);
console.log ( typeof jsElement);
console.log (jsElement)

jsElement["userNmae"] = "Marwa" ;
// jsElement["age"] = 34;

const jasonElementToServer = JSON.stringify (jsElement)
console.log ( typeof jasonElementToServer);
console.log (jasonElementToServer)

function one (){
    console.log("one");
}
function two(){
    one()
    console.log("two")
}
function three(){
two()
console.log()
console.log("three")
}
three()

let myRequest = new XMLHttpRequest();
myRequest.open ("GET","http://api.github.com/users/elzerowebschool/repos");
myRequest.send()
console.log(myRequest)