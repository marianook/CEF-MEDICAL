 //REVIEWS
 var $reviewsSlider = $('.reviews-slider');
if ($reviewsSlider.length) {
  $reviewsSlider.slick({
    accessibility: false,
    centerMode: true,
    slidesToShow: 5,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      }
    }]
  });
}
/* control del navbar */
const body = document.querySelector("body");
const nav__bar = document.querySelector(".nav__bar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
    nav__bar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
}
cancelBtn.onclick = () => {
    body.classList.remove("disabled");
    nav__bar.classList.remove("show");
    menuBtn.classList.remove("hide");
}
window.onscroll = () => {
    this.scrollY > 20 ? nav__bar.classList.add("sticky") : nav__bar.classList.remove("sticky");
}


/* control del scroll */

window.addEventListener('scroll', function() {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (element.getBoundingClientRect().top < screenSize) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }

    }
});
