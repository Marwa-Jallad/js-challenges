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
myRequest.onreadystatechange = function (){
    console.log(myRequest.readyState);
    console.log(myRequest.status);
    if (this.readyState === 4 && this.status === 200){
        let jsData = JSON.parse(this.responseText);
        // console.log(jsData);
        for (i=0; i<jsData.length;i++){
            let div = document.createElement("div");
            let repoName =document.createTextNode(jsData[i].full_name);
            div.appendChild(repoName);
            document.body.appendChild(div)
        }
    }
}

function makeItRed(e) {
    e.target.style.color = "red";
}

let p = document.getElementsByClassName("test")[0];
p.addEventListener("click" , makeItRed); 

function iamAcallBack (){
    console.log("i am a Call back Function")
}

setTimeout(iamAcallBack,2000);

setTimeout(() => {
    console.log("download photo from url");
    setTimeout(() => {
        console.log("resize photo");
        setTimeout(() => {
            console.log("add logo to the photo") 
            setTimeout(() => {
                console.log("show photo on the website")   
            }, 4000);              
        }, 3000);
    }, 2000);
}, 1000);
