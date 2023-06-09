(function (window){
    let IvanGreeter = {};
IvanGreeter.name = "Ivan";
let Greeting = "Привет, ";
IvanGreeter.sayHello = function(){
    console.log(Greeting + " " + IvanGreeter.name);
}
window.IvanGreeter = IvanGreeter;
})
(window);
