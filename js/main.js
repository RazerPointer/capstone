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

maincategory.addEventListener('mouseover', function(){
  document.getElementsByClassName("sub_category")[0].style.display="flex";  
})


maincategory.addEventListener('mouseout', function(){
  document.getElementsByClassName("sub_category")[0].style.display="none";  
})