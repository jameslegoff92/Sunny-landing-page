function windowControl() {
  window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;
    const navItems = document.querySelector('#menu-items');
    const triangle = document.querySelector('#triangle');
    
    if (windowWidth >= 703) {
    
      navItems.setAttribute('class', 'nav__items');
      triangle.setAttribute('class', 'triangle-bottom-right--off');
    } else {
  
      navItems.setAttribute('class', 'nav__items--off');
      triangle.setAttribute('class', 'triangle-bottom-right--off');
    }
  })
  window.addEventListener('load', () => {
    const windowWidth = window.innerWidth;
    const navItems = document.querySelector('#menu-items');

    if (windowWidth >= 703) {
      navItems.setAttribute('class', 'nav__items');
      triangle.setAttribute('class', 'triangle-bottom-right--off');
    }
  })
}

export default windowControl;