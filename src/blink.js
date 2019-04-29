/**
 * Author: Michał Stój MIS@N
 */

class Blink {
    constructor(properties) {
        this.properties = properties;
        this.init();
    }

    init () {
        let element = this.properties.id ? $('#' + this.properties.id) : $('.' + this.properties.class);
        element.css('color', this.properties.baseColor ? this.properties.baseColor : '');
        let text = element[0].innerText;
        let self = this;
        setInterval(function(){
            let displayBlink = '';
            let id = null;
            do {
                id = self.random(text.length);
            } while (text[id] === ' ');

            for (let i in text) {
                if(i == id) {
                    displayBlink += '<span style="color:' + self.properties.blinkColor + '">' + text[i] + '</span>';
                } else {
                    displayBlink += text[i];
                }
            }
            element[0].innerHTML = displayBlink;
        }, this.properties.interval ? this.properties.interval : 1000);
    };

    random (max) {
        return Math.floor(Math.random()*max);
    }
}