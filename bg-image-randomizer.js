var BGIR = {};

BGIR.add = function(width, height, filter) {
    var el = document.querySelector('.bgir');
    el.style.backgroundImage = 'url(https://unsplash.it/' + width + '/' + height + '/' + filter + ')';
}