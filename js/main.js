"use strict";

{
  // const toTop = document.querySelectorAll("");
  // console.log(toTop);
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

  window.addEventListener("scroll", () => {
    const scrollTarget = 80;
    let scrollDistance = window.pageYOffset;
    console.log(scrollDistance);
    if (scrollDistance > scrollTarget) {
      pageTop.classList.add("active");
    } else {
      pageTop.classList.remove("active");
    }
  });
}
