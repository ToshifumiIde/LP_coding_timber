"use strict";

{
  const pageTop = document.getElementById("js-pagetop");
  const ham = document.getElementById("js-ham");
  const hamLines = document.querySelectorAll(".hamLine");

  ham.addEventListener("click", () => {
    console.log("hamがクリックされました");
    hamLines.forEach((hamLine) => {
      hamLine.classList.toggle("active");
    });
  });

  pageTop.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("クリックされました");
  });
  console.log();
}
