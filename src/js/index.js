import "core-js";

/* General DOM Manipulation */
//

// Toggle Buttons
document.querySelectorAll(".js-toggle-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    let targetId = btn.dataset.targetId;
    document.getElementById(targetId).classList.toggle("toggle");
  });
});

// Auto-Close for Toggled Menus and modals
document.addEventListener("click", (e) => {
  document.querySelectorAll(".js-auto-close").forEach((el) => {
    if (!el.classList.contains("toggle")) return; // return if the el isn't yet toggled
    if (e.target.closest(".js-toggle-btn")) return; // return if the clicked el is a toggle-btn
    el.classList.toggle("toggle");
  });
});

// Inline Links SCrollIntoView
document.querySelectorAll("a[href*='#'").forEach((el) =>
  el.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById(el.getAttribute("href").slice(1)).scrollIntoView();
  })
);

// Current Year
document.querySelectorAll(".js-current-year").forEach((el) => {
  el.innerText = new Date().getFullYear();
});

// Tabs Component
document.querySelectorAll(".js-tabs-container").forEach((tabsContainer) => {
  tabsContainer.addEventListener("click", (e) => {
    [...tabsContainer.children].forEach((tab) => {
      if (tab == e.target) tab.classList.add("active");
      else tab.classList.remove("active");
    });
  });
});

/* Changing Color-theme */

class Theme {
  #themeBtn = document.getElementById("theme-btn");
  #themeIcon = document.querySelector("i");
  #theme = "";

  constructor() {
    this.#getSiteTheme();

    this.#themeBtn.addEventListener("click", () => {
      this.#theme = this.#theme === "light" ? "dark" : "light";
      this.#applyTheme();
      this.#saveTheme();
    });
  }

  // Getting prefered site theme from local storage (if there's any)
  #getSiteTheme() {
    this.#theme = localStorage.getItem("theme");

    if (this.#theme) this.#applyTheme();
    else this.#getDeviceTheme();
  }

  // If there is no site prefered theme => get device prefered theme
  #getDeviceTheme() {
    this.#theme = window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";

    this.#applyTheme();
  }

  // Appling theme
  #applyTheme() {
    if (this.#theme === "light") {
      document.documentElement.className = "light-theme";
      this.#themeIcon.className = "fa-solid fa-xl fa-moon";
    } else {
      document.documentElement.className = "dark-theme";
      this.#themeIcon.className = "fa-solid fa-xl fa-sun";
    }
  }

  #saveTheme() {
    localStorage.setItem("theme", this.#theme);
  }
}
const theme = new Theme();

// // Theme button click event
// themeBtn.addEventListener("click", () => {
//   document.documentElement.classList.toggle("light-theme");
//   document.documentElement.classList.toggle("dark-theme");
//   themeIcon.classList.toggle("fa-sun");
//   themeIcon.classList.toggle("fa-moon");

//   localStorage.setItem("theme", getCurrentMode());
// });

// function getCurrentMode() {
//   return document.body.classList.contains("dark-theme")
//     ? "dark-theme"
//     : "light-mode";
// }
