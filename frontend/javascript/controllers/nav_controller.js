import { Controller } from "stimulus"
export default class extends Controller {
  static targets = ['nav', 'menu', 'scrollTop']
  connect() {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              this.navTarget.classList.remove("show")
              this.scrollTopTarget.classList.remove("show")
            } else {
              // console.log('add');
              this.navTarget.classList.add("show")
              this.scrollTopTarget.classList.add("show")
          }
      })
  }, {
      root: null,
      rootMargin: '0%',
      threshold: 1
  });
  if (document.querySelector(".hero-right")) {
    observer.observe(document.querySelector(".hero-right"));
  }

  let navHeight =  window.getComputedStyle(this.navTarget).height
  // console.log(navHeight);
  document.documentElement.style.setProperty('--nav-height', navHeight);
  }
  toggle(){
    this.menuTarget.classList.toggle("show")
  }
}
