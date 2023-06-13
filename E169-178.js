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