import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../light.css";
import { ThemeContext } from "../Theme";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from "react-i18next";



function hambuger() {
    let body = document.querySelector("body")
    body.classList.toggle("open")
    
}

// function changeFile(){

//     let body = document.querySelector("body")
//     body.classList.toggle('new-theme')
    

// } 

function Navigation(){
    const { t, i18n } = useTranslation();
    const changeLanguageHandler = (e) => {
        const languageValue = e.target.value
        i18n.changeLanguage(languageValue);
    }
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className='header__nav'>
            <div className="toggle" onClick={hambuger}>
                <MenuIcon sx={{ fontSize: 40, color: "var(--noir)"  }} className="toggle__ouvrir ouvrir"/>
                <CloseIcon sx={{ fontSize: 40, color: "var(--noir)"  }} className="toggle__fermer fermer"/>
            </div>
            <ul>
                <select className="custom-select" style={{width: 200}}  onChange={changeLanguageHandler}>
                    <option value="fr" >Francais</option>
                    <option value="en" >English</option>
                </select>
                <NavLink onClick={hambuger} to="/" className={(nav) => (nav.isActive ? "nav_active" : "")}>
                    <li>{t('Acceuil')}</li>
                </NavLink>
                <NavLink onClick={hambuger} to="/blog" className={(nav) => (nav.isActive ? "nav_active" : "")}>
                    <li>{t('Blog')}</li>
                </NavLink>
                <NavLink onClick={hambuger} to="/cv" className={(nav) => (nav.isActive ? "nav_active" : "")}>
                    <li>{t('CV')}</li>
                </NavLink>
                <NavLink onClick={hambuger} to="/contact" className={(nav) => (nav.isActive ? "nav_active" : "")}>
                    <li>{t('Contact')}</li>
                </NavLink>   
                <li className="header__nav__theme" onClick={() => toggleTheme()}><WbSunnyOutlinedIcon className="imgTheme light" sx={{ fontSize: 30, color: "#fbbd05e8"  }} /><DarkModeOutlinedIcon className="imgTheme dark" sx={{ fontSize: 30, color: "#0460fe" }} /> <p>{theme}</p> </li>
                
            </ul>
        </div>
    );
};

export default Navigation;