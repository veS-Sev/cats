$(function () {
  var mixer = mixitup('.select__cards');

  mixer.sort('price-date:asc')
    .then(function(state) {
        state.activeSort.attribute === 'price-date';
    });
    mixer.sort('age-date:asc')
    .then(function(state) {
        state.activeSort.attribute === 'age-date'; // true
      });

  // кнопка прокрутки вверх 
let topBtn = document.getElementById('top__btn');
let getOpacity = (value) => {
  return topBtn.style.opacity = `${value}`;
  };

window.addEventListener('scroll', trackScroll);
topBtn.addEventListener('click', backToTop);


function trackScroll() {
let scroll = window.pageYOffset;
let coord = document.documentElement.clientHeight;
       if (scroll > coord) {
        getOpacity(1);
    }
    if (scroll < coord) { 
      getOpacity(0);
        } }

   function backToTop() { 
      if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }


// Добавляем лайки
  function addLike() {
    let buttons = document.querySelectorAll('.select__card-like-svg');
    for (key of buttons) {
         key.addEventListener('click', function (fn) {
        fn.target.closest('.select__card-like-btn').classList.toggle('active');
      });
    }
  };
  addLike();


  // окрашиваем блок в темный цвет, если статус 'Продан'
  function addColor() {
    let status = document.querySelectorAll('.select__card-status');
    status.forEach((elem, i) => {
      if (elem.innerHTML === 'Продан') {
        elem.style.backgroundColor = '#1f2021';
      }
    })
  };
  addColor();

  // burger-menu

  let burgerMenu = document.querySelector('.header__burger-menu'),
  header = document.querySelector('.header');

  burgerMenu.onclick =()=> {
    header.classList.toggle('active');
  }

});