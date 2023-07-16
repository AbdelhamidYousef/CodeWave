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

console.log("sdjkhfsdfgit ");
