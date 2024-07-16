function init() {
  
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const dropMenuBtn = document.querySelector('.drop-menu')
  const hiddenMenu = document.querySelector('.small-nav-wrapper')
  const btns = document.querySelectorAll('button')
  const sections = document.querySelectorAll('section')
  const sentMsg = document.querySelector('.sent-msg')
  const sendBtn = document.querySelector('.contact-btn')
  const contactForm = document.querySelector('form')
  // console.log(contactForm)
  // console.log(sentMsg)
  // console.log(sendBtn)

  // * nav-bar animation
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {
      className: 'big-nav--scrolled',
      targets: '.big-nav'
    }
  })


  // * hero image animation
  const tl = gsap.timeline()

  tl
    .to('.transition', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom center',
        pin: true,
        scrub: 0.8,
      },
      yPercent: -100,
      ease: 'none',
    })
    .to('.hero-image', {
      scrollTrigger: {
        trigger: '.hero-image',
        start: 'bottom 600px',
        end: '+=80%',
        scrub: 0.8,
        // markers: true
      },
      duration: 5,
      opacity: 0,
    })

  const transitionTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.transition',
      start: 'top 600px',
      end: 'bottom center',
      scrub: true,
      // markers: true
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

  navBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      hiddenMenu.classList.remove('open')
      if (e.target.value === 'hero') {
        tl.to('.transition', {

        })
      }
      gsap.to(window, {
        duration: 0.5,
        scrollTo: {
          y: `.${e.target.value}`,
          offsetY: () => e.target.value === 'hero' ? 'top top'
            : (window.innerWidth > 1020 ? 50 : 80)
        },

      })
    })
  })

  function openMenu() {
    if (hiddenMenu.classList.contains('open')) {
      hiddenMenu.classList.remove('open')
      dropMenuBtn.classList.remove('active')
      // console.log('menu opened')
    } else {
      hiddenMenu.classList.add('open')
      dropMenuBtn.classList.add('active')
      // console.log('menu closed')
    }
  }

  function sectionChange() {
    let current
    sections.forEach(section => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      // console.log(sectionTop, sectionHeight)
      // console.log(scrollY)
      if (scrollY >= (sectionTop - sectionHeight / 5)) {
        current = section.getAttribute('class')
        // console.log(current)
      }
    })
    btns.forEach(btn => {
      dropMenuBtn.classList.remove('active')
      btn.classList.remove('active')
      if (btn.getAttribute('value') === current) {
        btn.classList.add('active')
      }
    })
  }

  // * event listeners
  dropMenuBtn.addEventListener('click', openMenu)
  window.addEventListener('scroll' || 'click', sectionChange)
}

window.addEventListener('DOMContentLoaded', init)