var slideup  = document.getElementById('slideup')
var closeMenu  = document.getElementById('close-menu')
var closeMenu  = document.getElementById('wrapper')

document.getElementById('open-menu').addEventListener('click', function () {
    slideup.classList.add('show-menu');
});

document.getElementById('close-menu').addEventListener('click', function () {
    slideup.classList.remove('show-menu');
});

document.getElementById('wrapper').addEventListener('click', function () {
    slideup.classList.remove('show-menu');
});

document.getElementById('privat').addEventListener('click', function () {
    slideup.classList.remove('show-menu');
});
