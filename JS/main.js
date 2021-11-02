
// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
});
$('#return-to-top').click(function() { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});
/* control de autenticacion 

const botones = document.querySelector('#botones')

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log(user)
        botones.innerHTML = `<button type="button" class="btn btn-outline-dark" id="btnCerrarsesion">cerrarSesion</button>`

        cerrarSesion();

    } else {
        botones.innerHTML = `<button type="button" class="btn btn-outline-dark" id="btnAcceder">Acceder</button>`

        iniciarSesion();
    }
})

const cerrarSesion = () => {
    const btnCerrarsesion = document.querySelector('#btnCerrarsesion');
    btnCerrarsesion.addEventListener('click', () => {
        firebase.auth().signOut()
    })

}

const iniciarSesion = () => {
    const btnAcceder = document.querySelector('#btnAcceder');
    btnAcceder.addEventListener('click', async() => {

        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await firebase.auth().signInWithPopup(provider)
        } catch (error) {
            console.log(error)
        }
    })
}
*/
$(".carousel__e").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        800: {
            items: 3,
            nav: false
        },

        1000: {
            items: 5,
            nav: false
        }
    }
});

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


