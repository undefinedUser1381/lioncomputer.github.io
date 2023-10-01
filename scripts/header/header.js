let $ = document ;
let headerElem = $.querySelector(".header");

headerElem.insertAdjacentHTML(
  "beforeend",
  ` <div class="container">
<div class="nav__wrapper">
    <nav class="nav__desktop">
        <div class="nav-top__holder">
            <div class="nav-top__right">
               <div class="nav-top__logo">
                   <img src="images/header-img/logo.png" class="nav-top__img" alt="">
               </div>
               <div class="nav-top__inp">
                   <input class="nav-top__input" placeholder="جستجوی محصولات" type="search">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="search__icon"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>                      
               </div>
            </div>
            <div class="nav-top__left">
               <div class="nav-top__contact">
                    <div class="nav-top__contents">
                       <h3 class="nav-top__title">با ما تماس بگیرید</h3>
                       <p class="nav-top__text">021-88008801</p>
                    </div>
               </div>
               <div class="nav-top__icons">
                   <div class="icon__favs"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20px" height="20px" class="favs"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg> </div>
                   <div class="icons__holder icons__box">
                     <svg class="icons" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
                     <div class="counter">
                       <span class="counter-number">0</span>
                     </div>
                   </div>
                   <div class="icons__holder login__icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icons"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg></div>
               </div>
            </div>
        </div>
        <div class="nav-bottom__holder">
            <div class="nav-bottom__right">
                <ul class="nav-bottom__list">
                    <li class="nav-list__items">
                       <a class="nav-list__link" href="#">فروشگاه</a>
                       <svg class="arrow__down" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                       </svg>                          
                       <div class="sub-nav__holder">
                           <ul class="sub-nav__list">
                               <li class="sub-nav__items">پرداخت</li>
                               <li class="sub-nav__items">تماس با ما</li>
                               <li class="sub-nav__items">حساب کاربری</li>
                           </ul>
                       </div>
                   </li>
                    <li class="nav-list__items"><a href="" class="nav-list__link">سبد خرید</a></li>
                    <li class="nav-list__items"><a href="" class="nav-list__link">مجله</a></li>
                    <li class="nav-list__items"><a href="" class="nav-list__link">مستندات آموزشی</a></li>
                </ul>
            </div>
           <div class="nav-bottom__left">
               <div class="nav-bottom__contents">
                   <p class="nav-bottom__text">فروش اقساطی</p>
                   <p class="nav-bottom__text">فروش ویژه</p>
               </div>
           </div>
        </div>
    </nav>
   <nav class="nav__mobile">
     <div class="mobile__menu">
         <svg class="mobile-menu__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>                  
    </div>
    <div class="mobile__logo">
        <div class="nav-top__logo">
            <img src="images/header-img/logo.png" class="nav-top__img" alt="">
        </div>
    </div>
    <div class="mobile__basket">
        <div class="icons__holder icons__box">
        <svg class="icons" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
        <div class="counter">
          <span class="counter-number">0</span>
        </div>
      </div>
    </div>
   </nav>
</div>
</div>
<section class="overlay"></section>

<section class="nav-mobile__menu">
  <ul class="nav-mobile__list">
    <li class="nav-mobile__items">
        <div class="nav-top__inp">
            <input class="nav-top__input" placeholder="جستجوی محصولات" type="search">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="search__icon"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>                      
        </div>
    </li>
    <li class="nav-mobile__items">
            <span class="nav-mobile__links">فروشگاه
                <svg class="sub-arrow__down" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg> 
            </span>
        <ul class="sub-menu__list">
            <li class="sub-mobile__menu">تماس</li>
            <li class="sub-mobile__menu">ارتباط با ما</li>
            <li class="sub-mobile__menu">حساب کاربری</li>
        </ul>
    </li>
    <li class="nav-mobile__items"><span class="nav-mobile__links" href="">سبد خرید</span></li>
    <li class="nav-mobile__items"><span class="nav-mobile__links" href="">مجله</span></li>
    <li class="nav-mobile__items"><span class="nav-mobile__links" href="">مستندات آموزشی</span></li>
    <li class="nav-mobile__items"><span class="nav-mobile__links" href="">علاقه مندی</span></li>
    <li class="nav-mobile__items"><span class="nav-mobile__links" href="">مقایسه</span></li>
    <li class="nav-mobile__items"><span class="nav-mobile__links" href="">ورود/ثبت نام</span></li>
  </ul>
</section>

<section class="side-basket__nav">
<div class="side-basket__wrapper">
   <div class="side-basket__content">
     <p class="side-basket__title">سبد خرید</p>
     <div class="side-basket__items">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cancel-btn">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>            
      <p class="side-basket__text">بستن</p>
     </div>
   </div>
   <div class="side-basket__detail">
    <div class="side-basket__icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="basket__icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>              
    </div>
      <p class="side-empty__text">هیچ محصولی در سبد خرید نیست.</p>
      <a href="shop.html" class="side-link__btn">رفتن به فروشگاه</a>
   </div>
  <div class="basket-price__wrapper">
   <div class="basket__items">
    <ul class="basket__list">
      <li class="basket-list__item">
        <div class="basket__image">
          <img class="basket__img" src="images/img.jpg" alt="">
        </div>
        <div class="basket__contents">
           <p class="basket-content__text">رم دسکتاپ دو کاناله 3200 مگاهرتز مدل RGB PRO ظرفیت 16 گیگابایت</p>
           <input class="basket-content__count" min="1" placeholder="1" type="number" name="" id="">
           <span class="basket-content__price">7,500,000</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cancel-basket">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>  
      </li>
      <li class="basket-list__item">
      <div class="basket__image">
        <img class="basket__img" src="images/img.jpg" alt="">
      </div>
      <div class="basket__contents">
         <p class="basket-content__text">رم دسکتاپ دو کاناله 3200 مگاهرتز مدل RGB PRO ظرفیت 16 گیگابایت</p>
         <input class="basket-content__count" min="1" placeholder="1" type="number" name="" id="">
         <span class="basket-content__price">7,500,000</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cancel-basket">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>  
    </li>
    </ul>
    <div class="basket__footer">
       <div class="basket-price__items">
         <p class="basket-total__items">جمع کل سبد خرید</p>
         <span class="basket-total__price">7,500,000 تومان</span>
       </div>
       <div class="basket-btn__items">
          <a href="" class="basket__visit">مشاهده سبد خرید</a>
          <a href="" class="basket__buy">تسویه حساب</a>
       </div>
    </div>
   </div>
 </div>
</div>
</section>


  <section class="login__sidebar">
    <div class="login-sidebar__wrapper">
      <div class="login-sidebar__top">
        <p class="login__title">ورود</p>
        <div class="login__items">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="login-cancel__btn">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>       
          <p class="login__text">بستن</p>
        </div>
      </div>
      <div class="login-sidebar__middle">
        <div class="login__inputs">
          <label class="login__name" for="name">نام کاربری یا ایمیل<span class="star">*</span></label>
          <input type="text" name="" id="name">
          <label class="login__pass" for="pass">گذرواژه<span class="star">*</span></label>
          <input type="text" name="" id="pass">
        </div>
        <div class="login__remember">
          <input type="checkbox" name="" id="login__check">
          <p class="login-check__text">مرا به خاطر بسپار</p>
        </div>
        <a class="login-remember__link" href="">گذرواژه خود را فراموش کرده اید؟</a>
        <button class="login__btn">ورود</button>
      </div>
      <div class="login__sidebar-bottom">
          <div class="login__image">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="login-user__icon"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>
          </div>
          <p class="login-account__text">هنوز حساب کاربری ندارید؟</p>
          <a class="login-account__btn" href="reg.html">ایجاد حساب کاربری</a>
      </div>
    </div>
  </section>`
);

let navMobileLinks = $.querySelectorAll(".nav-mobile__links");
let liEle = $.querySelectorAll(".nav-mobile__items");
let navMobileMenu = $.querySelector(".nav-mobile__menu");
let mobileMenuBtn = $.querySelector(".mobile__menu");
let overlay = $.querySelector(".overlay");
let mobileBasket = $.querySelector(".mobile__basket");
let sideBasketNav = $.querySelector(".side-basket__nav");
let sideItemsElem = $.querySelector(".side-basket__items");
let deskBasket = $.querySelector(".icons__box");
let userBtn = $.querySelector(".login__icon");
let loginSidebar = $.querySelector(".login__sidebar");
let closeSidebar = $.querySelector(".login__items");
let navTopIcons = $.querySelector(".nav-top__icons");

navMobileLinks[0].addEventListener("click",function(){
    navMobileLinks[0].classList.toggle("sub-mobile__menu--open");
});

mobileMenuBtn.addEventListener("click",function(){
    navMobileMenu.classList.add("nav-mobile__menu--open");
    overlay.classList.add("overlay--open");
}); 

mobileBasket.addEventListener("click",function(){
    sideBasketNav.classList.add("side-basket__nav--open");
    overlay.classList.add("overlay--open");
});

sideItemsElem.addEventListener("click",function(){
    sideBasketNav.classList.remove("side-basket__nav--open");
    overlay.classList.remove("overlay--open");
});

deskBasket.addEventListener("click",function(){
    sideBasketNav.classList.add("side-basket__nav--open");
    overlay.classList.add("overlay--open");
});
// Sidebar login S
userBtn.addEventListener("click",function(){
  loginSidebar.classList.add("login__sidebar--open");
  overlay.classList.add("overlay--open");
});

closeSidebar.addEventListener("click",function(){
  overlay.classList.remove("overlay--open");
  loginSidebar.classList.remove("login__sidebar--open");
});
// Sidebar login E
overlay.addEventListener("click",function(){
    navMobileMenu.classList.remove("nav-mobile__menu--open");
    sideBasketNav.classList.remove("side-basket__nav--open");
    loginSidebar.classList.remove("login__sidebar--open");
    overlay.classList.remove("overlay--open");
});


// Count products 
let counters = $.querySelectorAll(".counter-number");
let getData = JSON.parse(localStorage.getItem("database")); 
counters.forEach(function(elems){
     elems.innerHTML = getData.length;
});