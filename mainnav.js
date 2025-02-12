fetch("mainnav.html")
    .then(Response  => Response.text())
    .then(data =>{
        document.getElementById("nav-placeholder").innerHTML = data;
    })