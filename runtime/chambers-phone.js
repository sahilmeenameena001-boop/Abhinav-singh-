(() => {
  const userAgent = navigator.userAgent;
  const isPhone = /iPhone|iPod/i.test(userAgent)
    || (/Android/i.test(userAgent) && /Mobile/i.test(userAgent));

  if (!isPhone) return;

  document.documentElement.classList.add("chambers-phone");

  document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".chambers-phone-menu");
    if (!menu) return;

    menu.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.open = false;
      });
    });

    menu.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.open) {
        menu.open = false;
        menu.querySelector("summary").focus();
      }
    });
  });
})();
