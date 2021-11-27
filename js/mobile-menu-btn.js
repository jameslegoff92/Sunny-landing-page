function mobileMenuBtn() {
  
  const hamburgerIconBtn = document.querySelector('.nav__mobile-menu-btn');

  hamburgerIconBtn.addEventListener('click', () => {
    
    const navItems = document.querySelector('#menu-items');
    const triangle = document.querySelector('#triangle')

    if (navItems.classList.contains('nav__items') ) {
      navItems.setAttribute('class', 'nav__items--off');
      triangle.setAttribute('class', 'triangle-bottom-right--off');
    } else {
      navItems.setAttribute('class', 'nav__items');
      triangle.setAttribute('class', 'triangle-bottom-right');
    }
  })
}

export default mobileMenuBtn