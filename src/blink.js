/**
 * Author: Michał Stój MIS@N
 */

class Blink {

    constructor(properties) {
        this.properties = properties;
        this.init();
    }

    init () {
        let element = this._selectItem(this.properties);
        element.style.color = this.properties.baseColor ? this.properties.baseColor : '';
        let text = element.innerText;
        if(this.properties.type === 'words') {
            text = text.split(' ');
        }
        let self = this;
        setInterval(function(){
            let displayBlink = '';
            let id = null;
            do {
                id = self._random(text.length);
            } while (text[id] === ' ');

            for (let i in text) {
                if(i == id) {
                    displayBlink += '<span style="color:' + self.properties.blinkColor + '">' + text[i] + '</span>';
                } else {
                    displayBlink += text[i];
                }
                if(self.properties.type === 'words') {
                    displayBlink += ' ';
                }
            }
            element.innerHTML = displayBlink;
        }, this.properties.interval ? this.properties.interval : 1000);
    };

    _random (max) {
        return Math.floor(Math.random()*max);
    }

    _selectItem(properties) {
        if(properties.tag && properties.tag !== '' && properties.tag !== ' ') {
            return document.querySelector(properties.tag);
        }
        if(properties.id && properties.id !== '' && properties.id !== ' ') {
            return document.getElementById(properties.id);
        }
        if(properties.class && properties.class !== '' && properties.class !== ' ') {
            return document.querySelector('.' + properties.class);
        }
    }
}
