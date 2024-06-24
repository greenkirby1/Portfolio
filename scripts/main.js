gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


// * nav-bar animation
ScrollTrigger.create({
  start: 'top -80',
  end: 99999,
  toggleClass: {
    className: 'top-bar--scrolled',
    targets: '.top-bar'
  }
})


// * hero image animation
const tl = gsap.timeline()

// const layers = gsap.utils.toArray('.layer')
// console.log(layers)

tl
  .to('.transition', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom center',
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
      scrub: 0.8,
    },
    duration: 5,
    opacity: 0,
  })

const transitionTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.transition',
    start: 'top 500px',
    end: 'bottom center',
    scrub: true,
  }
})

transitionTl
  .to('.matrix-3', {
    yPercent: 25,
    ease: 'power1.out'
  })
  .to('.matrix-2', {
    yPercent: 15,
    ease: 'power1.out'
  })



// * navigation animation
const navBtns = gsap.utils.toArray('nav button')

console.log(navBtns)

navBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    console.log(e.target)
    if (e.target.value === 'hero') {
      tl.to('.transition', {

      })
    }
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: `.${e.target.value}`,
        offsetY: () => e.target.value === 'hero' ? 'top top' : 50
      }
    })
  })
})