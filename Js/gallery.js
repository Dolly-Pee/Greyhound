const hidden_gallery = document.querySelector(".photo_container2");
const hideandshow_btn = document.querySelector(".load-more-img_btn");

hideandshow_btn.addEventListener("click", () => {
    const visibility =  hidden_gallery.getAttribute("aria-expanded");
    if( visibility === "false"){
        hidden_gallery.setAttribute("aria-expanded", true);
        hideandshow_btn.style.display = 'none';
    }
})