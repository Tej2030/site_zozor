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