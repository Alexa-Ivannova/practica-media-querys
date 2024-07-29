const menuHamburguesa = document.getElementById("menuHamburguesa")
const menu = document.getElementById("menu")
const cerrarMenu = document.getElementById("cerrarMenu")

menuHamburguesa.addEventListener("click", ()=>{
    menu.style.left= "0px"
})

cerrarMenu.addEventListener("click", ()=>{
    menu.style.left= "-100%"
})
