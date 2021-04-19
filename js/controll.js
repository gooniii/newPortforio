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

$('#itpassportBtn').on('click', () => {
    let itPassport = document.getElementById('itPassport'),
        itpassportWidth = 3,
        itPassportGauge = setInterval(itpassportFrame, 25);

    function itpassportFrame() {
        if (itpassportWidth >= 100) {
            clearInterval(itPassportGauge);
        } else {
            itpassportWidth++;
            itPassport.style.width = itpassportWidth + '%';
            itPassport.innerHTML = itpassportWidth + '%';
        }
    }
});

$('#japanesesBtn').on('click', () => {
    let japaneses = document.getElementById('japaneses'),
        japanesesWidth = 3,
        japanesesGauge = setInterval(japanesesFrame, 25);

    function japanesesFrame() {
        if (japanesesWidth >= 80) {
            clearInterval(japanesesGauge);
        } else {
            japanesesWidth++;
            japaneses.style.width = japanesesWidth + '%';
            japaneses.innerHTML = japanesesWidth + '%';
        }
    }
});

$('#htmlBtn').on('click', () => {
    let html = document.getElementById('html'),
        htmlWidth = 3,
        htmlGauge = setInterval(htmlFrame, 25);

    function htmlFrame() {
        if (htmlWidth >= 50) {
            clearInterval(htmlGauge);
        } else {
            htmlWidth++;
            html.style.width = htmlWidth + '%';
            html.innerHTML = htmlWidth + '%';
        }
    }
});

$('#cssBtn').on('click', () => {
    let css = document.getElementById('css'),
        cssWidth = 3,
        cssGauge = setInterval(cssFrame, 25);

    function cssFrame() {
        if (cssWidth >= 50) {
            clearInterval(cssGauge);
        } else {
            cssWidth++;
            css.style.width = cssWidth + '%';
            css.innerHTML = cssWidth + '%';
        }
    }
});

$('#javascriptBtn').on('click', () => {
    let javascript = document.getElementById('javascript'),
        javascriptWidth = 3,
        javascriptGauge = setInterval(javascriptFrame, 25);

    function javascriptFrame() {
        if (javascriptWidth >= 40) {
            clearInterval(javascriptGauge);
        } else {
            javascriptWidth++;

            javascript.style.width = javascriptWidth + '%';
            javascript.innerHTML = javascriptWidth + '%';
        }
    }
});

$('#phpBtn').on('click', () => {
    let php = document.getElementById('php'),
        phpWidth = 3,
        phpGauge = setInterval(phpFrame, 25);

    function phpFrame() {
        if (phpWidth >= 40) {
            clearInterval(phpGauge);
        } else {
            phpWidth++;

            php.style.width = phpWidth + '%';
            php.innerHTML = phpWidth + '%';
        }
    }
});

$('#sqlBtn').on('click', () => {
    let sql = document.getElementById('sql'),
        sqlWidth = 3,
        sqlGauge = setInterval(sqlFrame, 25);

    function sqlFrame() {
        if (sqlWidth >= 40) {
            clearInterval(sqlGauge);
        } else {
            sqlWidth++;

            sql.style.width = sqlWidth + '%';
            sql.innerHTML = sqlWidth + '%';
        }
    }
});
