function inici() {
    let niv = document.getElementById("niv");

   let tag_select = document.getElementById("concurso");
   let basket = document.getElementById('basket')
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

















    function select_form() {
        // @ts-ignore
        if (tag_select.value == 'liga') {
            niv.style.display = 'inline';
        }
        else {
            niv.style.display = 'none';
        }
    }
  }
  



let up = document.getElementById('up');
let down = document.getElementById('down');

function upFont() {
	let p = document.getElementsByTagName('p');
	let a = document.getElementsByTagName('a');
	let div = document.getElementsByTagName('div');
  let h2 = document.getElementsByTagName('h2');
  let h3 = document.getElementsByTagName('h3');
  let li = document.getElementsByTagName('li');
  let label = document.getElementsByTagName('label');
  let option = document.getElementsByTagName('select');
  let input = document.getElementsByTagName('input');
  let button = document.getElementsByTagName('button');


	Array.from(p).forEach(element => {
		let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
		let fontSize = parseFloat(style);
		element.style.fontSize = (fontSize + 1) + 'px';
	});
	Array.from(a).forEach(element => {
		let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
		let fontSize = parseFloat(style);
		element.style.fontSize = (fontSize + 1) + 'px';
	});
	Array.from(div).forEach(element => {
		let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
		let fontSize = parseFloat(style);
		element.style.fontSize = (fontSize + 1) + 'px';
	});
  Array.from(h2).forEach(element => {
    let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    element.style.fontSize = (fontSize + 1) + 'px';
  });
  Array.from(h3).forEach(element => {
    let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    element.style.fontSize = (fontSize + 1) + 'px';
  });
  Array.from(li).forEach(element => {
    let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    element.style.fontSize = (fontSize + 1) + 'px';
  });
  Array.from(label).forEach(element => {
    let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    element.style.fontSize = (fontSize + 1) + 'px';
  });
  Array.from(option).forEach(element => {
    let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    style=window.getComputedStyle(element, null).getPropertyValue('height');
    let height = parseFloat(style);
    style=window.getComputedStyle(element, null).getPropertyValue('width');
    let width = parseFloat(style);
    element.style.fontSize = (fontSize + 1) + 'px';
    element.style.height = (height + 2) + 'px';
    element.style.width = (width + 5) + 'px';
  });
  Array.from(input).forEach(element => {
    let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    style=window.getComputedStyle(element, null).getPropertyValue('height');
    let height = parseFloat(style);
    style=window.getComputedStyle(element, null).getPropertyValue('width');
    let width = parseFloat(style);
    element.style.fontSize = (fontSize + 1) + 'px';
    element.style.height = (height + 2) + 'px';
    element.style.width = (width + 5) + 'px';
  });
  Array.from(button).forEach(element => {
    let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    style=window.getComputedStyle(element, null).getPropertyValue('height');
    let height = parseFloat(style);
    style=window.getComputedStyle(element, null).getPropertyValue('width');
    let width = parseFloat(style);
    element.style.fontSize = (fontSize + 1) + 'px';
    element.style.height = (height + 2) + 'px';
    element.style.width = (width + 5) + 'px';
  });

}
function downFont() {
	let p = document.getElementsByTagName('p');
	let a = document.getElementsByTagName('a');
	let div = document.getElementsByTagName('div');
  let h2 = document.getElementsByTagName('h2');
  let h3 = document.getElementsByTagName('h3');
  let li = document.getElementsByTagName('li');
  let label = document.getElementsByTagName('label');
  let option = document.getElementsByTagName('select');
  let input = document.getElementsByTagName('input');
  let button = document.getElementsByTagName('button');


	Array.from(p).forEach(element => {
		let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
		let fontSize = parseFloat(style);
		element.style.fontSize = (fontSize - 1) + 'px';
	});
	Array.from(a).forEach(element => {
		let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
		let fontSize = parseFloat(style);
		element.style.fontSize = (fontSize - 1) + 'px';
	});
	Array.from(div).forEach(element => {
		let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
		let fontSize = parseFloat(style);
		element.style.fontSize = (fontSize - 1) + 'px';
	});
  Array.from(h2).forEach(element => {
    let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    element.style.fontSize = (fontSize - 1) + 'px';
  });
  Array.from(h3).forEach(element => {
    let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    element.style.fontSize = (fontSize - 1) + 'px';
  });
  Array.from(li).forEach(element => {
    let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    element.style.fontSize = (fontSize - 1) + 'px';
  });
  Array.from(label).forEach(element => {
    let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    element.style.fontSize = (fontSize - 1) + 'px';
  });
  Array.from(option).forEach(element => {
    let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    style=window.getComputedStyle(element, null).getPropertyValue('height');
    let height = parseFloat(style);
    style=window.getComputedStyle(element, null).getPropertyValue('width');
    let width = parseFloat(style);
    element.style.fontSize = (fontSize - 1) + 'px';
    element.style.height = (height - 2) + 'px';
    element.style.width = (width - 5) + 'px';
  });
  Array.from(input).forEach(element => {
    let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    style=window.getComputedStyle(element, null).getPropertyValue('height');
    let height = parseFloat(style);
    style=window.getComputedStyle(element, null).getPropertyValue('width');
    let width = parseFloat(style);
    element.style.fontSize = (fontSize - 1) + 'px';
    element.style.height = (height - 2) + 'px';
    element.style.width = (width - 5) + 'px';
  });
  Array.from(button).forEach(element => {
    let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    style=window.getComputedStyle(element, null).getPropertyValue('height');
    let height = parseFloat(style);
    style=window.getComputedStyle(element, null).getPropertyValue('width');
    let width = parseFloat(style);
    element.style.fontSize = (fontSize - 1) + 'px';
    element.style.height = (height - 2) + 'px';
    element.style.width = (width - 5) + 'px';
  });
}
window.addEventListener("load", inici, false);
