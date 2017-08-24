import background from './shapes';

var two = new Two({
    fullscreen: true,
    autostart: true
}).appendTo(document.body);

var square = two.makeCircle( two.width / 2, two.height / 2, 40);
square.noStroke().fill = '#ddd';

