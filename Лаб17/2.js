const burgerBtn = document.getElementById("burgerBtn");
const menuList = document.getElementById("menuList");

burgerBtn.addEventListener("click", (event) => {
    event.stopPropagation(); 
    menuList.classList.toggle("active");
});

document.addEventListener("click", (event) => {
    if (!menuList.contains(event.target) && !burgerBtn.contains(event.target)) {
        menuList.classList.remove("active");
    }
});