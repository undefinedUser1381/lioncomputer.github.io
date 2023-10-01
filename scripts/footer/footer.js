let footerELem = document.querySelector(".footer");

footerELem.insertAdjacentHTML(
  "beforeend",
  ` <div class="container">
<div class="footer__wrapper">
 <div class="footer-section__first">
  <p class="first-section__text">عضویت در خبر نامه</p>
    <div class="first-section__inputs">
      <input id="input1" placeholder="آدرس ایمیل خود را ابنجا وارد کنبد" type="text">
      <input id="input2" value="عضویت" type="submit">
    </div>
    <div class="social__media">
      <div class="instagram">
        <svg class="social-media__icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"/></svg>
      </div>
      <div class="telegram">
        <svg class="social-media__icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M14.4415206,6 C14.060553,6.00676048 13.476055,6.20741135 10.663148,7.36249773 C9.67796175,7.7670526 7.70897661,8.60437935 4.75619264,9.87447795 C4.27670659,10.0627254 4.02553067,10.2468857 4.00266485,10.4269588 C3.95876487,10.7726802 4.46291296,10.8803081 5.09723696,11.0838761 C5.61440201,11.2498453 6.31007997,11.4440124 6.67173438,11.4517262 C6.99978943,11.4587234 7.36593635,11.3251987 7.77017511,11.051152 C10.5290529,9.21254679 11.9531977,8.28322679 12.0426094,8.26319203 C12.1056879,8.24905787 12.1930992,8.23128593 12.2523244,8.28325656 C12.3115496,8.33522719 12.3057275,8.43364956 12.299454,8.46005377 C12.2492926,8.67117474 9.65764825,10.998457 9.50849738,11.1513987 L9.43697409,11.2233057 C8.88741493,11.7661123 8.33196049,12.1205055 9.290333,12.7440164 C10.155665,13.3069957 10.6592923,13.6661378 11.5507686,14.2430701 C12.1204738,14.6117635 12.5671299,15.0489784 13.1553348,14.9955401 C13.4259939,14.9709508 13.705567,14.7196888 13.8475521,13.9703127 C14.1831052,12.1993135 14.8426779,8.36209709 14.9951103,6.78087197 C15.0084653,6.64233621 14.9916649,6.46503787 14.9781732,6.38720805 C14.9646815,6.30937823 14.9364876,6.19848702 14.8340164,6.11639754 C14.7126597,6.01917896 14.5253109,5.99867765 14.4415206,6 Z"/></svg>
      </div>
      <div class="twitter">
        <svg class="social-media__icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"/></svg>
      </div>
      <div class="youtube">
        <svg class="social-media__icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"/></svg>
      </div>
    </div>
 </div>
 <div class="footer-section__second">
   <div class="footer-first__box">
     <div class="address__contents">
      <div class="title__left w-30">
        <div class="circle">
          <span class="inner__circle"></span>
       </div>
       <p class="title__text">آدرس فروشگاه</p>
      </div>
      <p class="subtext">دفتر مرکزی</p>
     </div>
     <div class="address__details">
       <div class="address__icon">
        <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-4.4 0-8 3.6-8 8 0 5.4 7 11.5 7.3 11.8.2.1.5.2.7.2.2 0 .5-.1.7-.2.3-.3 7.3-6.4 7.3-11.8 0-4.4-3.6-8-8-8zm0 17.7c-2.1-2-6-6.3-6-9.7 0-3.3 2.7-6 6-6s6 2.7 6 6-3.9 7.7-6 9.7zM12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
        </div>
        <p class="address__caption">تهران، خیابان طالقانی، خیابان کاشانی، کوچه کاج، پلاک 55، ساختمان مرکزی متافایل (همراه با پارکینگ)</p>
     </div>
     <div class="address__mail">
      <div class="address__icon">
        <svg class="icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3.5l.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5v-9zm1 1.035V12h12V4.536L8.31 8.9H7.7L2 4.535zM13.03 4H2.97L8 7.869 13.03 4z"/></svg>
      </div>
      <p class="mail__text">کد پستی: 1283653313</p>
     </div>
   </div>
   <div class="footer-second__box">
    <div class="phone__contents">
      <div class="title__left w-35">
        <div class="circle">
          <span class="inner__circle"></span>
        </div>
        <p class="title__text">شماره های تماس</p>
      </div>
      <p class="subtext">( ساعات کاری از ۹:۳۰ صبح الی ۱۸ و پنجشنبه از ۹:۳۰ تا ۱۴ )</p>
     </div>
     <div class="phone__details">
        <div class="phone__icon">
          <svg width="20px" heigth="20px" class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.839 13.84c-2.372 2.378-5.12 4.648-6.209 3.56-1.557-1.56-2.517-2.913-5.951-.155s-.796 4.598.712 6.106c1.74 1.74 8.226.091 14.64-6.32s8.06-12.898 6.32-14.64c-1.512-1.505-3.347-4.139-6.105-.711s-1.403 4.39.153 5.946c1.088 1.094-1.182 3.841-3.56 6.214z"/></svg>
        </div>
        <p class="phone__number">021-880004344</p>
     </div>
     <div class="mobile__details">
      <div class="mobile__icon">
        <svg width="15px" heigth="15px" class="icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M15,0 C16.1045695,0 17,0.8954305 17,2 L17,18 C17,19.1045695 16.1045695,20 15,20 L5,20 C3.8954305,20 3,19.1045695 3,18 L3,2 C3,0.8954305 3.8954305,0 5,0 L15,0 Z M15.6,15.388 L4.4,15.388 L4.4,18 C4.4,18.3313708 4.66862915,18.6 5,18.6 L15,18.6 C15.3313708,18.6 15.6,18.3313708 15.6,18 L15.6,15.388 Z M10,16 C10.5522847,16 11,16.4477153 11,17 C11,17.5522847 10.5522847,18 10,18 C9.44771525,18 9,17.5522847 9,17 C9,16.4477153 9.44771525,16 10,16 Z M15,1.4 L5,1.4 C4.66862915,1.4 4.4,1.66862915 4.4,2 L4.4,13.988 L15.6,13.988 L15.6,2 C15.6,1.66862915 15.3313708,1.4 15,1.4 Z"/>
        </svg>
      </div>
      <p class="mobile__number">093661151091</p>
   </div>
   </div>
   <div class="footer-third__box">
    <div class="title__left w-30">
      <div class="circle">
        <span class="inner__circle"></span>
     </div>
     <p class="title__text">اعتماد شما سرمایه ماست</p>
    </div>
   </div>
 </div>
 <div class="footer-section__third">
   <div class="third-section__wrapper">
      <div class="third-first__row">
           <ul class="footer-third__list">
             <li class="footer-third__item"><a href="">مجله</a></li>
             <li class="footer-third__item"><a href="">مطالب کاربران</a></li>
             <li class="footer-third__item"><a href="">مشاوره</a></li>
             <li class="footer-third__item"><a href="">مشاوره</a></li>
             <li class="footer-third__item"><a href="">برندها</a></li>
           </ul>
      </div>
      <div class="third-second__row">
        <p class="footer-third__text">کپی رایت – تمام حقوق این وب سایت برای <a href="https://undefineduser1381.github.io/sederfan.github.io//">عرفان</a> محفوظ می باشد.</p>
      </div>
   </div>
 </div>
 </div>

<div class="footer__mobile">
<div class="footer-mobile__wrapper">
 <div class="footer-mobile__details">
  <a href="shop.html" class="footer-mobile__contents">
    <svg class="footer-mobile__icon" width="40px" height="40px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 2.5V2C1.26166 2 1.05645 2.16823 1.00971 2.40194L1.5 2.5ZM13.5 2.5L13.9903 2.40194C13.9435 2.16823 13.7383 2 13.5 2V2.5ZM14.5 7.5V8C14.6498 8 14.7917 7.93284 14.8867 7.81699C14.9816 7.70115 15.0197 7.54883 14.9903 7.40194L14.5 7.5ZM0.5 7.5L0.00970966 7.40194C-0.0196679 7.54883 0.0183596 7.70115 0.113329 7.81699C0.208298 7.93284 0.350203 8 0.5 8V7.5ZM3.5 10.5H3V11H3.5V10.5ZM11.5 10.5V11H12V10.5H11.5ZM0 15H15V14H0V15ZM1 7.5V14.5H2V7.5H1ZM13 7.5V14.5H14V7.5H13ZM1.5 3H13.5V2H1.5V3ZM13.0097 2.59806L14.0097 7.59806L14.9903 7.40194L13.9903 2.40194L13.0097 2.59806ZM14.5 7H0.5V8H14.5V7ZM0.99029 7.59806L1.99029 2.59806L1.00971 2.40194L0.00970966 7.40194L0.99029 7.59806ZM1 1H14V0H1V1ZM3 7.5V10.5H4V7.5H3ZM3.5 11H11.5V10H3.5V11ZM12 10.5V7.5H11V10.5H12Z" fill="#000000"/>
    </svg>
    <p class="footer-mobile__text">فروشگاه</p>
  </a>
  <a href="#" class="footer-mobile__contents">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="footer-mobile__icon">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
    </svg>
    <p class="footer-mobile__text">علاقه مندی ها</p>
  </a>
  <a href="basket.html" class="footer-mobile__contents">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="footer-mobile__icon">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
    </svg>
   <p class="footer-mobile__text">سبد خرید</p> 
   <div class="basket__circle">
      <span class="circle__number">0</span>
   </div>
  </a>
  <a href="reg.html" class="footer-mobile__contents">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="footer-mobile__icon"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>
    <p class="footer-mobile__text">حساب کاربری</p>
  </a>
  <a href="main.html" class="footer-mobile__contents">
    <svg class="footer-mobile__icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve"><polyline fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="3,17 16,4 29,17 "/><polyline fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="6,14 6,27 13,27 13,17 19,17 19,27 26,27 26,14 "/></svg>
    <p class="footer-mobile__text">خانه</p>
  </a>
</div>
</div>
</div>
</div>
<section class="scrolltop">
<div class="scrolltop__holder">
 <svg class="scrolltop__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
   <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
 </svg>
</div>
</section>
`);

let scrollToTop = $.querySelector(".scrolltop");
// scrollTop
$.addEventListener("scroll",function(){
  if($.documentElement.scrollTop > 620){
      scrollToTop.style.display = "block";
      scrollToTop.addEventListener("click",function(){
      $.documentElement.scrollTo(0,0);
     });
  }else{
    scrollToTop.style.display = "none";
  }
});
