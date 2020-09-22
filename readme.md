# MIS@N Blink

A script that changes the color of a letter or letters in text in a random way.

## Instalation
`npm i misan.blink`

or use [GitHub source](https://github.com/MISAN-MS/Blink)

## Usage
```html
<h1 class="blink-text">Your text to blink</h1>

<h1 id="blink-text">Your other text to blink</h1>
```
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
or
```javascript
new Blink({
    tag: 'h1',
    baseColor: '#00f',
    blinkColor: '#f00',
    interval: 5000
});
```

## Properties
- `tag` - element tag name for blinking - default `null`
- `id` - element id for blinking - default `null`, used if `tag` is null
- `class` - element class for blinking - default `null`, used if `tag` and `id` are null
- `baseColor` - base of the text color - default `null`, overwrite base color
- `blinkColor` - blinking of the text color - default `null`
- `interval` - the time between the change of the text color in `ms` - default `1000`
- `type` - can be use to change blinked letters to single words - default `letters`, can take `words`, `letters`

## Change log
- 23/09/2020 - remove jquery from dependencies
- 24/05/2019 
  - add html tags to select
  - add property `type` to change blinked letters to blinked words
- 29/04/2019 - removed `space` from random chars
- 27/04/2019 version 0.1.0
