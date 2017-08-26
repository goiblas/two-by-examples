import background from './shapes';

function init(){
    var two = new Two({
        fullscreen: true,
        autostart: true
    }).appendTo(document.body);

    var square = two.makeCircle( two.width / 2, two.height / 2, 40);
    square.noStroke().fill = '#222';
    square.translation.set(20, two.height -50);    
}



init();