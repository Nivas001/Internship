

const getDarkThemeData = document.querySelector("#checkNativeSwitch");
const htmlElement = document.documentElement
const themeIcon = document.querySelector("#themeIcon");

getDarkThemeData.addEventListener("change", ()=>{
    if(getDarkThemeData.checked){
        htmlElement.setAttribute('data-bs-theme', 'dark');
        themeIcon.textContent = "🌙";
    }
    else{
        htmlElement.setAttribute('data-bs-theme', 'light');
        themeIcon.textContent = "☀️";
    }
})