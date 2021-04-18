'use strict';

// nav 제어
window.addEventListener('scroll', function () {
    let Y = scrollY;

    //위치
    let about = 1461;
    let skill = 2192;
    let experience = 2924;
    let contact = 3654;

    //id 불러오기
    let aboutBtn = document.querySelector('#aboutBtn');
    let skillBtn = document.querySelector('#skillBtn');
    let experienceBtn = document.querySelector('#experienceBtn');
    let contactBtn = document.querySelector('#contactBtn');

    if (Y >= about && Y < skill) {
        aboutBtn.setAttribute('style', 'color:#607D63');
    } else {
        aboutBtn.setAttribute('style', 'color:#707070');
    }

    if (Y >= skill && Y < experience) {
        skillBtn.setAttribute('style', 'color:#ffffff');
    } else {
        skillBtn.setAttribute('style', 'color:#707070');
    }

    if (Y >= experience && Y < contact) {
        experienceBtn.setAttribute('style', 'color:#607D63');
    } else {
        experienceBtn.setAttribute('style', 'color:#707070');
    }

    if (Y >= contact) {
        contactBtn.setAttribute('style', 'color:#607D63');
    } else {
        contactBtn.setAttribute('style', 'color:#707070');
    }
});

$(document).ready(() => {
    var javascript = document.getElementById('javascript');
    var html = document.getElementById('html');
    var css = document.getElementById('css');
    var php = document.getElementById('php');
    var sql = document.getElementById('sql');
    var itPassport = document.getElementById('itPassport');
    var japaneses = document.getElementById('japaneses');
    var width = 3;

    var itPassportGauge = setInterval(itpassportFrame, 25);
    function itpassportFrame() {
        if (width >= 100) {
            clearInterval(itPassportGauge);
        } else {
            width++;
            itPassport.style.width = width + '%';
            itPassport.innerHTML = width + '%';
        }
    }

    var japanesesGauge = setInterval(japanesesFrame, 25);
    function japanesesFrame() {
        if (width >= 80) {
            clearInterval(japanesesGauge);
        } else {
            width++;
            japaneses.style.width = width + '%';
            japaneses.innerHTML = width + '%';
        }
    }

    var javascriptGauge = setInterval(javascriptFrame, 20);
    function javascriptFrame() {
        if (width >= 40) {
            clearInterval(javascriptGauge);
        } else {
            width++;

            javascript.style.width = width + '%';
            javascript.innerHTML = width + '%';

            php.style.width = width + '%';
            php.innerHTML = width + '%';

            sql.style.width = width + '%';
            sql.innerHTML = width + '%';
        }
    }

    var htmlGauge = setInterval(htmlFrame, 25);
    function htmlFrame() {
        if (width >= 60) {
            clearInterval(htmlGauge);
        } else {
            width++;
            html.style.width = width + '%';
            html.innerHTML = width + '%';
        }
    }

    var cssGauge = setInterval(cssFrame, 25);
    function cssFrame() {
        if (width >= 50) {
            clearInterval(cssGauge);
        } else {
            width++;
            css.style.width = width + '%';
            css.innerHTML = width + '%';
        }
    }
});
