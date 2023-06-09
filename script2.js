(function (window){
    let MarieGreeter = {};
MarieGreeter.name = "Marie";
let Greeting = "Здравствуйте, ";
MarieGreeter.sayHello = function(){
    console.log(Greeting + " " + MarieGreeter.name);
}
window.MarieGreeter = MarieGreeter;
})
(window);
