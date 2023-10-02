const searchButton = document.querySelector("nav .desktop-nav .link-search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})



// const bagButton = document.querySelector("nav .desktop-nav .link-bag");
// const bagCloseButton = document.querySelector(".bag-container .link-close");
// const bagContainer = document.querySelector(".bag-container");

// bagButton.addEventListener("click", () => {
//     desktopNav.classList.add("hide");
//     bagContainer.classList.remove("hide");
//     overlay.classList.add("show");
// })

// bagCloseButton.addEventListener("click", () => {
//     desktopNav.classList.remove("hide");
//     bagContainer.classList.add("hide");
//     overlay.classList.remove("show");
// })

// overlay.addEventListener("click", () => {
//     desktopNav.classList.remove("hide");
//     bagContainer.classList.add("hide");
//     overlay.classList.remove("show");
// })
