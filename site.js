let body = document.querySelector("body")
let toggle = document.querySelector(".toggle")
let croix = true
toggle.addEventListener("click", function hambuger() {
    switch (croix) {
        case true:
            body.classList.add("open")
            croix = false
            break;
    
        case (false):
            body.classList.remove("open")
            croix = true
            break;
    }
})

let lien = document.querySelector("link")
let imgageTheme = document.querySelector(".imgTheme")
let theme = "light"
function changeFile(){
    switch (theme) {
        case 'light':
            imgageTheme.setAttribute("src", "images/icon/moon.png")
            lien.setAttribute("href", "dark.css")
            theme="dark"
            break;
            case 'dark':
                imgageTheme.setAttribute("src", "images/icon/sun.png")
                lien.setAttribute("href", "light.css")
                 theme="light"
            break;
        default:
            break;
    }
}