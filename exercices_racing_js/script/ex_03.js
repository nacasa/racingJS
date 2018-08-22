window.addEventListener('load',function() {
    var path = document.body.children[0].children[0].children[2].children[0];
    path.addEventListener('click', function() {
        var name;
        name = prompt("Quel est votre nom ?");
        if(name === null)
        {
            return;
        }
        if (name === "") {
            while(name===""){
                name = prompt("Quel est votre nom ?");
                if(name === null)
                {
                    return;
                }
            }
        }
        if (name !== "") {
            var ret;
            ret = confirm("Etes-vous sûr que " + name + " est votre nom ?");

            if(ret === true){
                alert("Bonjour " + name + "!");
                path.innerHTML = name;
            }

            if(name === null)
            {
                return;
            }
        }
    })
});