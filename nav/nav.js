fetch("../nav/nav.html")
    .then(Response  => Response.text())
    .then(data =>{
        document.getElementById("nav-placeholder").innerHTML = data;
    })