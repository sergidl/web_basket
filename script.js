function inici() {
    niv = document.getElementById("niv");

    tag_select = document.getElementById("concurso");
    basket = document.getElementById('basket')
    tag_select.addEventListener("change", select_form, false);
    // let OSName = "Unknown OS";
    // if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
    // if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
    // if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
    // if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";
    // if (navigator.appVersion.indexOf("Win") != -1) {
        
    // }
    // else {
    //     basket.style.display='none';
    // }
}
function select_form() {
    if (tag_select.value == 'liga') {
        niv.style.display = 'inline';
    }
    else {
        niv.style.display = 'none';
    }
}
window.addEventListener("load", inici, false);
