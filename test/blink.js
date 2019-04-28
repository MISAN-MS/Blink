$(document).ready(function() {
    var bP1 = {
        class: 'blink-text-h',
        baseColor: '#00f',
        blinkColor: '#f00',
        interval: 5000
    };
    new Blink(bP1);

    var bP2 = {
        class: 'blink-text-p',
        baseColor: '#000',
        blinkColor: '#ff0',
        interval: 1000
    };
    new Blink(bP2);

    var bP3 = {
        id: 'blink-div',
        baseColor: '#da0',
        blinkColor: '#f00',
        interval: 2000
    };
    new Blink(bP3);
});