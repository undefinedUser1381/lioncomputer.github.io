
// slider 1
const swiper1 = new Swiper('.slider1',{

    direction: 'horizontal',
    loop: true,
   
    autoplay: {
        delay: 2000,
     },

    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
      576: {
        slidesPerView: 1
      },
     
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },

      992: {
        slidesPerView: 1,
        spaceBetween: 20
      },
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

// slider 2
  const swiper2 = new Swiper('.slider2', {
  
    loop:true,

    autoplay:{
       delay:3000
    } ,

    direction: 'horizontal',

    navigation: {
      nextEl: '.prev-btn',
      prevEl: '.next-btn',
    },

  });

// Aos
AOS.init({once:true,});

// let database = [
//     {id:1,name:"DSAF",number:1},
//     {id:2,name:"sdaf",number:2},
//     {id:3,name:"savbb",number:3},

// ];

// let userBasket = [];

// userBasket.push(...database);

// localStorage.setItem("database",JSON.stringify(database));

// console.log(database);

// console.log(userBasket);


