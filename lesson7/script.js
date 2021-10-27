"use strict"

const lazyImeges = document.querySelectorAll(' img[data-src],source [data-srcset]');
const windowHeight = document.documentElement.clientHeight;

let lazeImegesPositions = [];
if (lazyImeges.length > 0) {
    lazyImeges.forEach(img => {
        if (img.dataset.src || img.dataset.srcset) {
            lazyImegesPositions.push(img.getBoundingClientRect().top + pageYOffset);
            lazyScrollCheck();
        }
    });
}

window.addEventListener("scroll", lazyScroll);

function lazyScroll() {
    if (document.querySelectorAll('img[data-src],source[data-srcset').length > 0) {
        lazyScrollCheck();
    }
}

function lazyScrollCheck() {
    let imgIndex = lazyImegesPisitions.findIndex(
        item => pageYOffset > item - windowHeight
    );

    if (imgIndex >= 0) {
        if (lazyImeges[imgIndex].dataset.src) {
            lazyImeges[imgIndex].src = lazyImeges[imgIndex].dataset.src;
            lazyImeges[imgIndex].removeAttribute('data-stc');
        } else if (lazyImges[imgIndex].dataset.srcset) {
            lazyImeges[imgIndex].srcset = lazyImeges[imgIndex].dataset.srcset;
            lazyImeges[imgIndex].removeAttribute('data-srcset');
        }
        delete lazyImegesPisitions[imgIndex];
    }
}