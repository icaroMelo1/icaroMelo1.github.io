const box1 = document.querySelector('#pixel-board');




function req41() { 

    for (let i = 0; i < 5; i += 1) {
      const row = document.createElement('ol');
      row.className = 'row';
      box1.appendChild(row);
      for (let i = 0; i < 5; i += 1) {
        const pixels = document.createElement('li');
        pixels.className = 'pixel';
        pixels.style.backgroundColor = 'white';
        row.appendChild(pixels);
    }

    }
  }

  req41();

  function req42(){

    for (let i = 0; i < 5; i += 1) {
      const pixels = document.createElement('div');
      pixels.className = 'pixel';
      pixels.style.backgroundColor = 'white';
      row.appendChild(pixels);
  }
}


  function req4() {
    let makebox = document.querySelector('#generate-board');
    
    makebox.addEventListener('click', function () {
    let box1 = document.querySelector('#pixel-board');
    let areaofbox = document.querySelector('#board-size').value;
    let number = areaofbox;
    box1.innerHTML = '';
    if (document.querySelector('#board-size').value == false){
      alert('Board inválido!')
    }
    if (document.querySelector('#board-size').value < 5 ){
      alert('Board inválido!');
      number = 5;
    }  
    if (document.querySelector('#board-size').value > 39  ){
      alert('Board inválido!');
      number = 39;
    }
    for (let i = 0; i < number; i += 1) {
    let row = document.createElement('ol');
    row.className = 'row';
    box1.appendChild(row);
    row.style.marginBottom = '0px';
      for (let i = 0; i < number; i += 1) {
      let pixels = document.createElement('li');
      pixels.className = 'pixel';
      row.appendChild(pixels);
    
     };
    };
   });
  };
  req4();
  
  window.onload = function(){
    let corrigir = document.querySelectorAll('.color');

    corrigir[0].style.backgroundColor = 'black';
    corrigir[1].style.backgroundColor = 'red';
    corrigir[2].style.backgroundColor = 'green';
    corrigir[3].style.backgroundColor = 'yellow';
    corrigir[4].style.backgroundColor = 'blue';
    corrigir[5].style.backgroundColor = 'white';

    let blackcolor = document.querySelector('#black');
    blackcolor.classList.add('selected'); 
  };

  function req7() {
    let seleciona = document.querySelector('#color-palette');
    let selected = document.querySelector('.color');
    seleciona.addEventListener('click', (event) => {
      if (selected.classList.contains('selected') === false) {
        event.target.classList.add('selected');
        selected = document.querySelector('.selected');
      } else {
        selected.classList.remove('selected');
        event.target.classList.add('selected');
        selected = document.querySelector('.selected');
      };
    });
  };
  req7();

  function req8() {
    
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('pixel') == true) {
      event.target.style.backgroundColor =  document.querySelector('.selected').style.backgroundColor;
        
    };
  }, false);
  };
  req8();

  function req9() {
    let clearbutton = document.querySelector('#clear-board');
    clearbutton.addEventListener('click', function () {
      let pix = document.querySelectorAll('.pixel');
      let limits = document.querySelectorAll('.pixel').length;
      
      for(let i = 0; i < limits; i +=1){
        pix[i].style.backgroundColor = 'white';
      }
    });
  };
  req9();

  function opcional(){
      let reloadbtt = document.querySelector('#reload');
      reloadbtt.addEventListener('click', function(){
        let corrigir = document.querySelectorAll('.color');

        corrigir[6].style.backgroundColor = `rgb(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
        corrigir[7].style.backgroundColor = `rgb(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
        corrigir[8].style.backgroundColor = `rgb(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
        corrigir[9].style.backgroundColor = `rgb(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;

      })
  };
  opcional();
