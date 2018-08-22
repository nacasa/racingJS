window.addEventListener('load',function() {
    var path = document.body.children[0].children[0].children[2].children[0];
    var clicknb = 0;
    path.addEventListener('click',function(){
        clicknb ++;
        path.innerHTML = clicknb;
    })
});
