
const Navbar = () => {
    const header = document.getElementById('Navbar')
    this.scrollY >= 50 ? header.classList.add('bg-light-subtle','sm-nav')
                       : header.classList.remove('bg-light-subtle','sm-nav')
}

window.addEventListener('scroll', Navbar)


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 0,
})

sr.reveal('.banner-text', {origin:'left'});
sr.reveal('.about-img2, .about-img1',{origin:'left', interval:500, distance: '500px',})
sr.reveal('.about-tag, .about-heading, .about-para, .about-btn',{origin:'right', interval:200,delay:1000})
sr.reveal('.tag, .heading, .para, .ex-btn',{origin:'right', interval:200,delay:0})
sr.reveal('.about2-img',{duration: 300,distance: '0px',interval: 250,delay:600})
// sr.reveal('.about-img3',{origin:'left',duration: 300, distance: '0px', delay:600, easing:'linear'})
// sr.reveal('.about-img4',{origin:'top',duration: 300, distance: '0px', delay:800, easing:'linear'})
// sr.reveal('.about-img5',{origin:'bottom',duration: 300, distance: '0px', delay:1200, easing:'linear'})
// sr.reveal('.about-img6',{origin:'right',duration: 300, distance: '0px', delay:1000, easing:'linear'})
sr.reveal('.tag, .heading, .para, .ex-btn',{origin:'right', interval:200,delay:0})
sr.reveal('.blog-card, .card',{interval:200, distance:'0'})