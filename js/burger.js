document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__burger').addEventListener('click', function(){
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__nav__list').classList.toggle('animate');
  })
});
