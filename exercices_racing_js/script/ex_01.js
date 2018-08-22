window.addEventListener('load',function(){console.log(helloWorld());});
var helloWorld = function() {
    var hello = "Hello World";
    var path = document.body.children[0].children[0].children[2].children[0];
    path.innerText = hello;
};