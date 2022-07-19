'use strict'


// === Main Page ===

function mainPage() {
   page.innerHTML = `
   <section class="section-info">
      <div class="user-info d-flex flex-column align-items-center shadow bg-mydark">
         <div class="photo-box">
            <img src="./img/im.jpg" alt="" class="photo">
         </div>
         <h5 class="user-title">Койгеров Иван</h5>
         <h6 class="user-sub-title">Frontend разработчик</h6>
         <ul class="flex-list-center info-list">
            <li class="info-item">
               <a href="https://t.me/an1meboy" class="link">
                  <svg>
                     <use href="../img/social.svg#tg"></use>
                  </svg>
               </a>
            </li>

            <li class="info-item">
               <a href="https://github.com/IvanKoigerov" class="link">
                  <svg>
                     <use href="../img/social.svg#github"></use>
                  </svg>
               </a>
            </li>

            <li class="info-item">
               <a href="https://discordapp.com/users/0954/" class="link">
                  <svg>
                     <use href="../img/social.svg#discord"></use>
                  </svg>
               </a>
            </li>
         </ul>
      </div>

      <div class="user-work bg-mydark shadow">
         <div id="myCarousel" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
            <div class="carousel-item active">
               <div class="container">
                  <div class="carousel-caption text-start">
                     <h1>Навыки</h1>
                     <p>В css я знаю как и где использовать grid, flex, css-анимации, position, media</p>
                     <p>В scss я изучил mixin, переменные и вложенность</p>
                     <p>В js я изучил dom</p>
                     <p>Умею пользоваться git</p>
                  </div>
               </div>
            </div>

            <div class="carousel-item">
               <img src="./img/site1.jpg" class="d-block w-100" alt="...">
      
               <div class="container">
                  <div class="carousel-caption">
                     <div class="text-box d-flex flex-column align-items-end">
                        <h1 class="bg-mydark">
                           Макет
                           <p><a class="btn btn-lg btn-primary" href="https://ivankoigerov.github.io/myMaket/">Подробнее</a></p>
                        </h1>
                     </div>
                  </div>
               </div>
            </div>

            <div class="carousel-item">
               <img src="./img/site2.jpg" class="d-block w-100" alt="...">
      
               <div class="container">
                  <div class="carousel-caption text-end">
                     <div class="text-box d-flex flex-column align-items-end">
                        <h1 class="bg-mydark">
                           Практика
                           <p><a class="btn btn-lg btn-primary" href="https://ivankoigerov.github.io/test/">Подробнее</a></p>
                        </h1>
                     </div>
                  </div>
               </div>
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
         </div>
      </div>
   </section>

   <section class="section-cards">
      <div class="card-box">
         <div class="card bg-mydark shadow">
            <a href="https://ivankoigerov.github.io/myMaket/"><img src="./img/site1.jpg" class="card-img-top" alt="..."></a>
            <div class="card-body">
            <h5 class="card-title">Макет</h5>
            <p class="card-text">Это одна из моих работ, мне понравился макет и мне захотелось его сверстать на чистом css и js</p>
            <a href="https://ivankoigerov.github.io/myMaket/" class="btn btn-primary">Подробнее</a>
            </div>
         </div>
         <div class="card bg-mydark shadow">
            <a href="https://ivankoigerov.github.io/test/"><img src="./img/site2.jpg" class="card-img-top" alt="..."></a>
            <div class="card-body">
            <h5 class="card-title">Практика</h5>
            <p class="card-text">Это одна из моих работ, в ней я полность свестрал сайт и написал клиентскую часть используя только js и scss</p>
            <a href="https://ivankoigerov.github.io/test/" class="btn btn-primary">Подробнее</a>
            </div>
         </div>
         <div class="card bg-mydark shadow">
            <div class="card-body">
            <h5 class="card-title">Навыки</h5>
            <p class="card-text">В css я знаю как и где использовать grid, flex, css-анимации, position, media</p>
            <p class="card-text">В scss я изучил mixin, переменные и вложенность</p>
            <p class="card-text">В js я изучил dom</p>
            <p class="card-text">Умею пользоваться git</p>
            </div>
         </div>
      </div>

   </section>`;
}


// === Timer Page ===

function timerPage() {
   page.innerHTML = `
   <section class="section-time bg-mydark shadow">
      <div>
         <h1>Timer</h1>
         <div class="timer">
            <p class="timer-time hour">00</p> : <p class="timer-time minute">00</p> : <p class="timer-time seconds">00</p>
         </div>
      </div>
   </section>`;
   timerText();
}


// === Map Page ===

function mapPage() {
   page.innerHTML = `
   <section class="section-map shadow">
      <div class="bg-mydark map-box">
         <div class="box-loader bg-mydark">
            <div class="loader"></div>
         </div>
         <div class="map" id="map">
         </div>
      </div>
   </section>`;

   let mapBox = document.querySelector('#map');
   let script = document.createElement('script');
   script.src = "https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU";
   mapBox.append(script);
   script.onload = () => {
      const loader = document.querySelector('.box-loader');

      function init() {
         let map = new ymaps.Map("map", {
            center: [56.759350, 37.130200],
            zoom: 17
         });

         map.controls.remove('searchControl'); // удаляем поиск
         map.controls.remove('trafficControl'); // удаляем контроль трафика
         map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим

         let placemark = new ymaps.Placemark([56.759350, 37.130200], {
            balloonContentHeader: 'Дом',
         }, {
         });

         map.geoObjects.add(placemark);
      }

      ymaps.ready(init);

      ymaps.ready(() => {
         loader.classList.add('hide');
      });
   }

}


// === TImer ===

let hour = 0, minute = 0, seconds = 0;

function timer() {
   seconds++;
   if (seconds > 60) {
      minute++;
      seconds = 0;
   }
   else if (minute > 60) {
      hour++;
      minute = 0;
   }
   timerText();
}


// === Timer Initialization ===

function timerText() {
   const hourEl = document.querySelector('.hour');

   if (hourEl) {
      const minuteEl = document.querySelector('.minute');
      const secondsEl = document.querySelector('.seconds');

      if (seconds <= 9) {
         secondsEl.innerText = '0' + seconds;
      }
      else {
         secondsEl.innerText = seconds;
      }

      if (minute <= 9) {
         minuteEl.innerText = '0' + minute;
      }
      else {
         minuteEl.innerText = minute;
      }

      if (hour <= 9) {
         hourEl.innerText = '0' + hour;
      }
      else {
         hourEl.innerText = hour;
      }
   }
}


// === Page Change ===

const page = document.querySelector('#page');

window.addEventListener('load', () => {
   loadPage(window.location.hash);
})

window.onhashchange = () => {
   loadPage(window.location.hash);
}

function loadPage(location) {
   const navLink = document.querySelectorAll('.nav-link');
   for (let i = 0; i < navLink.length; i++) {
      if (navLink[i].getAttribute('data-link') == window.location.hash && !navLink[i].classList.contains('active')) {
         navLink[i].classList.add('active');
      }
      else {
         navLink[i].classList.remove('active');
      }

      if (navLink[i].getAttribute('data-link') == location && !navLink[i].classList.contains('active')) {
         navLink[i].classList.add('active');
      }
   }

   switch (location) {
      case "#/Map":
         mapPage();
         break;

      case "#/Timer":
         timerPage();
         break;

      case "#/":
      case "":
         mainPage();
         break;
   }
}


// === Timer Work ===

setInterval(timer, 1000);


