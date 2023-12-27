const mobile_nav_toggle = document.querySelector('.mobile-nav-toggle');
const navigation_bar = document.getElementById('navigation-bar');
const nav__shadow = document.querySelector('.nav__shadow');

mobile_nav_toggle.addEventListener('click', () => {

    let data_visibility = mobile_nav_toggle.getAttribute('data-visible');
    
    if(data_visibility === "false"){
        mobile_nav_toggle.setAttribute('data-visible', true);
        navigation_bar.setAttribute('aria-expanded', true);
        nav__shadow.style.display = "block"
    }else{
        mobile_nav_toggle.setAttribute('data-visible', false)
        navigation_bar.setAttribute('aria-expanded', false);
        nav__shadow.style.display = "none"
    }
})
