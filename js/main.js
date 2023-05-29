const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');


searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});

const maincategory = document.getElementsByClassName('main_category_mypage')[0];
const subcategory = document.querySelector('.sub_category'); 
const wrapsubcategory = document.querySelector('.wrap_sub_category');
const mainframe = document.querySelector('.mainframe');

maincategory.addEventListener('mouseover', function(){
  subcategory.classList.remove('hide');
  wrapsubcategory.style.display = "flex";
  mainframe.style.marginTop = "59px";
  mainframe.style.transition = "margin .4s";
});


maincategory.addEventListener('mouseout', function(){
  subcategory.classList.add('hide');
  wrapsubcategory.style.display = "none";
  mainframe.style.marginTop = "0px";
  mainframe.style.transition = "margin .4s";
});

const tmp = 1;