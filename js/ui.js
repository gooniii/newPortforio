var homeBtn = document.querySelector('#homeBtn');

homeBtn.addEventListener('click', function (e) {
    e.preventDefault(), controller.scrollTo(0);
});

var controller = new ScrollMagic.Controller();

var b1 = TweenMax.to('#b1', 1, {
        x: '205%',
        alpha: 1,
    }),
    b2 = TweenMax.to('#b2', 1, {
        x: '-50%',
        alpha: 1,
    }),
    b3 = TweenMax.to('#b3', 1, {
        x: '-50%',
        alpha: 1,
    }),
    b4 = TweenMax.to('#b4', 1, {
        x: '545%',
        alpha: 1,
    }),
    b5 = TweenMax.to('#b5', 1, {
        x: '490%',
        alpha: 1,
    });

var left = TweenMax.to('#left', 1, {
    x: -450,
    alpha: 0,
});

var right = TweenMax.to('#right', 1, {
    x: 450,
    alpha: 0,
});

var header = TweenMax.to('#header', 1, {
    y: 1,
    alpha: 1,
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

var headerCont = new ScrollMagic.Scene({
    triggerHook: 0.8,
    offset: 1000,
    duration: '30%',
}).setTween(header);

var visualCont = document.querySelector('#home'),
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
}).setTween(text);

var bGroup1Cont = new ScrollMagic.Scene({
    triggerHook: 0.7,
    duration: '30%',
    offset: 1300,
}).setTween([b1, b2]);

var bGroup2Cont = new ScrollMagic.Scene({
    triggerHook: 0.7,
    duration: '120%',
    offset: 2300,
}).setTween([b3, b4, b5]);

controller.addScene([visualPinScene, visualScene, text, headerCont, bGroup1Cont, bGroup2Cont]);

// .addIndicators({name: "메모"})
