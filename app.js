const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav-bar-menu')
const navLogo = document.querySelector('#nav-bar-my-name')
const body = document.querySelector('body')

// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)