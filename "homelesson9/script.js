//Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.
document.addEventListener("DOMContentLoaded", function() {
    let square = document.getElementById("colorSquare");
    let button = document.getElementById("changeButton");
  
    button.addEventListener("click", function() {
     square.style.backgroundColor = "green";
      square.style.width = "100px";
      square.style.height = "100px";
    });
  }); 


  //Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.
  document.addEventListener("DOMContentLoaded", function() {
    let square = document.getElementById("colorSquare");
    let button = document.getElementById("changeButton");
    button.addEventListener("click", function() {
      square.style.backgroundColor = "blue";
      console.log(square.style.backgroundColor); 
    });
});



//Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.
function увеличитьКвадрат() {
  let квадрат = document.getElementById('square');
  let текущаяШирина = квадрат.offsetWidth;
  let текущаяВысота = квадрат.offsetHeight;

  // Увеличиваем ширину и высоту на 20px
  квадрат.style.width = (текущаяШирина + 20) + 'px';
  квадрат.style.height = (текущаяВысота + 20) + 'px';
}


//Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.
function создатьПараграф() {
  let параграф = document.createElement('p');
  параграф.textContent = 'Произвольный текст';
  параграф.classList.add('blue-text');
  let root = document.querySelector('.root');
  root.appendChild(параграф);
}

//Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.
let текущийЦвет = 'blue'; 
function создатьПараграф() {
  let параграф = document.createElement('p');
  параграф.textContent = 'Произвольный текст';
  параграф.classList.add(текущийЦвет + '-text');
  var root = document.querySelector('.root');
  root.appendChild(параграф);
  текущийЦвет = (текущийЦвет === 'blue') ? 'green' : 'blue';
}