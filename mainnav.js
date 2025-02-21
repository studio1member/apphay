fetch("mainnav.html")
    .then(Response  => Response.text())
    .then(data =>{
        document.getElementById("nav-placeholder").innerHTML = data;
    })

    function toggleMenu() {
        var menu = document.getElementById("menu");
        var menuOff = document.getElementById("menu-off");
        if (menu.style.left === "0px") {
            menu.style.left = "-220px"; // Đóng menu
            menuOff.style.left = "-1000px";
        } else {
            menu.style.left = "0px"; // Mở menu
            menuOff.style.left = "0px";
        }
    }
    function toggleMenuOff() {
        var menu = document.getElementById("menu");
        var menuOff = document.getElementById("menu-off");
        if (menu.style.left === "0px") {
            menu.style.left = "-220px"; // Đóng menu
            menuOff.style.left = "-1000px";
        } else {
            menu.style.left = "0px"; // Mở menu
            menuOff.style.left = "0px";
        }
    }