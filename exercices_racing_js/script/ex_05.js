window.addEventListener('load',function() {
    var path;
    path = document.body.children[0].children[0].children[2].children[0].children[2];
    path.addEventListener('change', function(){
        document.body.style.backgroundColor = path.value;
    })
});
window.addEventListener('load',function() {
    var pathButtonMax;
    pathButtonMax = document.body.children[0].children[0].children[2].children[0].children[0];
    pathButtonMax.addEventListener('click', function(){
        var pathMax;
        pathMax = document.body.children[0];
        var style = window.getComputedStyle(pathMax, null).getPropertyValue('font-size');
        var currentSize = parseFloat(style);
        pathMax.style.fontSize = (currentSize + 1) + 'px';
    })
});
window.addEventListener('load',function() {
    var pathButtonMin;
    pathButtonMin = document.body.children[0].children[0].children[2].children[0].children[1];
    pathButtonMin.addEventListener('click', function(){
        var pathMin;
        pathMin = document.body.children[0];
        var style = window.getComputedStyle(pathMin, null).getPropertyValue('font-size');
        var currentSize = parseFloat(style);
        pathMin.style.fontSize = (currentSize - 1) + 'px';
    })
});