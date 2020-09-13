// scroll to div
$(".scroll-about").click(function () {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 500);
});
$(".scroll-dogs").click(function () {
    $('html, body').animate({
        scrollTop: $(".dogs").offset().top
    }, 500);
});
$(".scroll-gallery").click(function () {
    $('html, body').animate({
        scrollTop: $(".gallery").offset().top
    }, 500);
});
$(".scroll-contact").click(function () {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 500);
});
$(".scroll-main").click(function () {
    $('html, body').animate({
        scrollTop: $("main").offset().top
    }, 500);
});

//arrow up
$(".up").click(function () {
    $('html, body').animate({
        scrollTop: $("main").offset().top
    }, 1000);
});

const hamburger = document.querySelector('.hamburger');
const miniMenu = document.querySelector('.mini-menu');
const close = document.querySelector('.hamburger i:nth-child(2)');
const bars = document.querySelector('.hamburger i:nth-child(1)');
const menuButtons = document.querySelectorAll('.menu');
const arrowUp = document.querySelector('.up');
let click = 0;




//menu habmurger
hamburger.onclick = function () {
    //open
    if (click == 0) {
        click++;
        miniMenu.style.display = 'block';
        bars.style.display = 'none';
        close.style.display = 'block';
    } else { //close
        miniMenu.style.display = 'none';
        bars.style.display = 'block';
        close.style.display = 'none';
        click = 0
    }
}
// Close mini menuButtons after click
const closeMenu = () => {
    click = 0
    miniMenu.style.display = 'none';
    bars.style.display = 'block';
    close.style.display = 'none';
}

menuButtons.forEach((menuButton) => {
    menuButton.addEventListener('click', closeMenu)
});

// show hamburger menu in right scroll
const scrollFunc = () => {
    let y = window.scrollY;
    if (y >= 600) {
        hamburger.style.display = 'block';
        arrowUp.style.display = 'block';
    } else {
        hamburger.style.display = 'none';
        arrowUp.style.display = 'none';
    }
}

if (screen.width > 600) {
    window.addEventListener("scroll", scrollFunc);
} else {
    hamburger.style.display = 'block';
    arrowUp.style.display = 'block';
}
//animation
AOS.init({
    duration: 1250,
});

//light gallery

$('#lightgallery').lightGallery({
    selector: '.bgeffect'
});
//all gallery
$('#gallery').lightGallery()

//filtry

$('.names button').click(function () {
    $('.names button').removeClass('active');
    $(this).addClass('active');
    const selector = $(this).attr('data-filter');
    $('#lightgallery').isotope({
        filter: selector
    });
    return false;
})

// slideshow gallery on mobile
const images = ["img2/1.png", "img2/2.png", "img2/3.png", "img2/4.png", "img2/5.png", "img2/6.png", "img2/7.png", "img2/8.png", "img2/9.png"];
const mainImg = document.querySelector('.main');
let active = 0;
const timeout = 2000;

const showSlide = () => {
    active++;
    if (active >= images.length) {
        active = 0;
    }
    mainImg.src = images[active];

}
if (screen.width <= 1100) {
    setInterval(showSlide, 2000);
}

//show more text in section about
const moreRead = document.querySelector('.about .more');
const allStory = document.querySelector('.all-story');
const closeStory = document.querySelector('.all-story i');

moreRead.addEventListener('click', () => {
    allStory.style.display = 'block';
})
closeStory.addEventListener('click', () => {
    allStory.style.display = 'none';
})

//show all gallery
const moreImg = document.querySelector('.gallery .more');
const closeImg = document.querySelector('.all-images i');
const allImages = document.querySelector('.all-images')

moreImg.addEventListener('click', () => {
    allImages.style.display = 'flex';
})

closeImg.addEventListener('click', () => {
    allImages.style.display = 'none';
})

//ad href and scr to img

const aImg = document.querySelectorAll('#gallery a');
const img = document.querySelectorAll('#gallery a img')
const addSrc = () => {
    for (i = 0; i < aImg.length; i++) {
        aImg[i].href = `img2/${i+1}.png`;
        img[i].src = `img2/${i+1}.png`;
    }
}
addSrc();