gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


// nav-bar animation
ScrollTrigger.create({
  start: 'top -80',
  end: 99999,
  toggleClass: {
    className: 'top-bar--scrolled',
    targets: '.top-bar'
  }
})

const navLinks = gsap.utils.toArray('nav a')

console.log(navLinks)

// hero image animation
const tl = gsap.timeline()

tl.to('.transition', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom center',
      // markers: true,
      pin: true,
      scrub: 0.8
    },
    yPercent: -100,
    ease: 'none',
  })
  .to('.hero-image', {
    scrollTrigger: {
      trigger: '.hero-image',
      start: 'bottom center',
      end: '+=80%',
      markers: true,
      scrub: 0.8,
    },
    duration: 5,
    opacity: 0,
  })