$(document).ready(function() {
    new Blink({
        class: 'blink-text-h',
        baseColor: '#00f',
        blinkColor: '#f00',
        interval: 5000
    });

    new Blink({
        class: 'blink-text-p',
        baseColor: '#000',
        blinkColor: '#ff0',
        interval: 1000
    });

    new Blink({
        id: 'blink-div',
        baseColor: '#f0f',
        blinkColor: '#000',
        interval: 2000
    });
});