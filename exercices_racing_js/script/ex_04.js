window.addEventListener('load',function() {

    document.body.addEventListener('keypress', keypress);
});
function keypress(e) {
    var path = document.body.children[0].children[0].children[2].children[0];
    var evnt = window.event? event:e;
    var str;
    str = evnt.key;
    console.log(evnt.key);
    var strnb = path.innerHTML;
    strnb = strnb + str;
    var nb;
    nb = 42;
    if (strnb.length >= nb){
        strnb = strnb.substr(1, nb);
        path.innerText = strnb;
    } else {path.innerText += strnb;}
    console.log(strnb);
}