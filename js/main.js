"use strict";

{
  const pageTop = document.getElementById("js-pagetop");
  const ham = document.getElementById("js-ham");

  ham.addEventListener("click", () => {
    console.log("hamがクリックされました");
  });

  pageTop.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("クリックされました");
  });
  console.log();
}
