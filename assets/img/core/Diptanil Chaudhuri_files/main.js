// import { publications } from "../data/publications";

/**
* Template Name: MyResume - v4.9.2
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
const flexGrid = ({ columns, margin }) => {
  const width = `${100 / columns}%`;
  const unitlessMargin = margin.match(/[\d?.]/g).join('');
  const unit = margin.match(/[a-zA-Z%]+/g).join('');
  const calcMargin = ((unitlessMargin * columns) - unitlessMargin) / columns;
  return (`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &:after {
      flex: auto;
      margin: 0 auto;
      content: "";
    }
    >* {
      width: calc(${width} - ${calcMargin});
      margin-left: ${unitlessMargin / 2}${unit};
      margin-right: ${unitlessMargin / 2}${unit};
      &:nth-child(1) {
        margin-left: 0;
      }
      &:nth-child(${columns}n) {
        margin-right: 0;
      }
      &:nth-child(${columns}n + 1) {
        margin-left: 0;
      }
    }
  `)
}



(function() {
  "use strict";


  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }


   /**
   * About type effect
   */
    const about_typed = select('#about_typed')
    if (about_typed) {
      let about_typed_strings = "About"
      about_typed_strings = about_typed_strings.split(',')
      new Typed('#about_typed', {
        strings: about_typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }

     /**
   * Skill type effect
   */
  const skill_typed = select('#skill_typed')
  if (skill_typed) {
    let skill_typed_strings = "Skills"
    skill_typed_strings = skill_typed_strings.split(',')
    new Typed('#skill_typed', {
      strings: skill_typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }


    /**
   * Education type effect
   */
     const education_typed = select('#education_typed')
     if (education_typed) {
       let education_typed_strings = 'Education'
       education_typed_strings = education_typed_strings.split(',')
       new Typed('#education_typed', {
         strings: education_typed_strings,
         loop: true,
         typeSpeed: 100,
         backSpeed: 50,
         backDelay: 2000
       });
     }

     /**
   * Experience type effect
   */
      const experience_typed = select('#experience_typed')
      if (experience_typed) {
        let experience_typed_strings = 'Experience'
        experience_typed_strings = experience_typed_strings.split(',')
        new Typed('#experience_typed', {
          strings: experience_typed_strings,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000
        });
      }

        /**
   * Publicataion type effect
   */
        const publicataion_typed = select('#publication_typed')
        if (publicataion_typed) {
          let publicataion_typed_strings = 'Publications'
          publicataion_typed_strings = publicataion_typed_strings.split(',')
          new Typed('#publication_typed', {
            strings: publicataion_typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
          });
        }

            /**
   * Project type effect
   */
        const project_typed = select('#project_typed')
        if (project_typed) {
          let project_typed_strings = 'Projects'
          project_typed_strings = project_typed_strings.split(',')
          new Typed('#project_typed', {
            strings: project_typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
          });
        }

 





  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }


  /**
   * Porfolio
   */

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  // *******************************************************************
  // *******************************************************************


  /**
   * Publication isotope and filter
   */
  window.addEventListener('load', () => {
    let publicationContainer = select('.publication-container');
    if (publicationContainer) {
      let publicationIsotope = new Isotope(publicationContainer, {
        itemSelector: '.publication-item'
      });

      // let publicationFilters = select('#publication-filters li', true);
      let publicationFilters = select('.publication-filter-selector', true);

      on('click', '.publication-filter-selector', function(e) {
        e.preventDefault();
        publicationFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        publicationIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        publicationIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);

    }

  });

  /**
   * Initiate publication lightbox
   */
  const publicationLightbox = GLightbox({
    selector: '.publication-lightbox'
  });

  /**
   * Initiate publication details lightbox
   */
  const publicationDetailsLightbox = GLightbox({
    selector: '.publication-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  // *******************************************************************
  // *******************************************************************


  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();



})();

