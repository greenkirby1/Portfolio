document.addEventListener('DOMContentLoaded', (e) => {
  gsap.registerPlugin(ScrollTrigger)

  ScrollTrigger.addEventListener('scrollStart', () => {
    ScrollTrigger.create({
      start: 'top -80',
      end: 99999,
      toggleClass: {
        className: 'top-bar--scrolled',
        targets: '.top-bar'
      }
    })
  })

  // ScrollTrigger.addEventListener('scrollEnd', () => {
  //   const navbar = document.querySelector('.top-bar')
  //   navbar.classList.remove('top-bar--scrolled')
  // })
})