var controller = new ScrollMagic.Controller();

var left = TweenMax.to('#left', 1, {
    x: -450,
    alpha: 0,
});

var right = TweenMax.to('#right', 1, {
    x: 450,
    alpha: 0,
});

var text = new TimelineMax()
    .to('#futureText', 1, {
        alpha: 0,
        delay: 0.3,
        scale: 0.7,
    })
    .to('#nowText', 1, {
        alpha: 1,
        delay: 0.4,
        scale: 0.9,
    })
    .to('#nowText', 1, {
        alpha: 0,
        delay: 0.5,
    });

var backgroundRound = TweenMax.to('#backgroundRound', 1, {
    x: -300,
    alpha: 1,
});

var visualCont = document.querySelector('#visual'),
    visualPinScene = new ScrollMagic.Scene({
        triggerHook: 0,
        duration: '100%',
    }).setPin(visualCont);

var visualScene = new ScrollMagic.Scene({
    triggerHook: 0.7,
    duration: '100%',
    offset: 800,
}).setTween([left, right]);

var text = new ScrollMagic.Scene({
    triggerHook: 0.7,
    duration: '150%',
    offset: 50,
}).setTween([text]);

controller.addScene([visualPinScene, visualScene, text]);
