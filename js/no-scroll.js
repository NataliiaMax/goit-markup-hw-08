(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");   // на кнопку
  const mobileMenuRef = document.querySelector("[data-menu]");  //на мобильное меню
  const mobileBodyRef = document.querySelector("[data-body]");  //на боди
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
    mobileBodyRef.classList.toggle("no-scroll--mobile-menu");
  });
})();