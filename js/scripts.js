/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function fadeupEvent() {
    var fadeinClass = Array.prototype.slice.call(document.getElementsByClassName("fadeup"));
    fadeinClass.forEach(function(element) {
        var boundingClientRect = element.getBoundingClientRect();
        var scroll = document.documentElement.scrollTop || document.body.scrollTop;

        // ブラウザウィンドウの ビューポートの高さ
        var windowHeight = window.innerHeight;

        // スクロールの位置が、フェードインしたい要素の位置にいるかどうか判定する
        if (scroll > scroll + boundingClientRect.top - windowHeight + 200){

            // 要素を表示する場合は、要素の透明度を無くし、Y方向の移動距離を無くす。これで表示される
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
}

window.onload = function(){
    // 画面が中途半端なスクロール位置でリロードされても表示するべきものが表示されるようにするため、ロードですぐに呼び出す
    fadeupEvent();

    // スクロールしたら動くエベントとして用意しておく。スクロールするたびに動くようにする
    window.addEventListener('scroll', fadeupEvent, false);
}