function inici() {
    niv = document.getElementById("niv");

    tag_select = document.getElementById("concurso");
    basket = document.getElementById('basket')
    tag_select.addEventListener("change", select_form, false);


    const scrollElements = document.querySelectorAll(".js-scroll");

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
    
      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };
    
    const elementOutofView = (el) => {
      const elementTop = el.getBoundingClientRect().top;
    
      return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
      );
    };
    
    const displayScrollElement = (element) => {
      element.classList.add("scrolled");
    };
    
    const hideScrollElement = (element) => {
      element.classList.remove("scrolled");
    };
    
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        } else if (elementOutofView(el)) {
          hideScrollElement(el)
        }
      })
    }
    
    window.addEventListener("scroll", () => { 
      handleScrollAnimation();
    });





    // window.addEventListener('scroll', function() {
    //     let element = document.querySelector('#main-container');
    //     let position = element.getBoundingClientRect();
    
    //     // checking whether fully visible
    //     if(position.top >= 0 && position.bottom <= window.innerHeight) {
    //         console.log('Element is fully visible in screen');
    //     }
    
    //     // checking for partial visibility
    //     if(position.top < window.innerHeight && position.bottom >= 0) {
    //         console.log('Element is partially visible in screen');
    //     }
    // });

















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
