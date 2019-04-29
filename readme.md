# MIS@N Blink

Script to blink one letter in text in other color.

## Usage
```javascript
new Blink({
    class: 'blink-text',
    baseColor: '#00f',
    blinkColor: '#f00',
    interval: 5000
});
```
or
```javascript
new Blink({
    id: 'blink-text',
    baseColor: '#00f',
    blinkColor: '#f00',
    interval: 5000
});
```

## Properties
- `id` - element id for blinking - default `null`
- `class` - element class for blinking - default `null`
- `baseColor` - base of the text color - default `null`
- `blinkColor` - blinking of the text color - default `null`
- `interval` - the time between the change of the text color in `ms` - default `1000`

## Change log
- 29/04/2019 removed `space` from random chars
- 27/04/2019 version 0.1.0