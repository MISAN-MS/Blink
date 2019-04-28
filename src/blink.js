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
            let index = self.random(text.length);
            for (let i in text) {
                if(i == index && text[i] !== ' ') {
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