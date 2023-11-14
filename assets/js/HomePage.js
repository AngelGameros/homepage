document.addEventListener("DOMContentLoaded", function () {
    var menuItems = document.querySelectorAll(".menu nav ul li a");

    menuItems.forEach(function (item) {
        item.addEventListener("click", function () {
            menuItems.forEach(function (el) {
                el.classList.remove("menu-clicked", "contact-clicked");
            });

            if (!item.classList.contains("contact-edge")) {
                item.classList.add("menu-clicked");
            }

            if (item.classList.contains("contact-edge") && !item.classList.contains("menu-static")) {
                item.classList.add("contact-clicked");
            }
        });
    });
});
