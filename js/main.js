"use strict";

{
  // const toTop = document.querySelectorAll("");
  // console.log(toTop);
  const pageTop = document.getElementById("js-pagetop");
  const ham = document.getElementById("js-ham");
  const hamLines = document.querySelectorAll(".hamLine");
  let aTags = document.getElementsByTagName("a");
  const pcWidth = 760;

  console.log(aTags);

  const toPageTop = () => {
    let speed = 400;
  };

  ham.addEventListener("click", () => {
    hamLines.forEach((hamLine) => {
      hamLine.classList.toggle("active");
    });
  });

  
  pageTop.addEventListener("click", (e) => {
    hamLines.forEach((hamLine) => {
      hamLine.classList.remove("active");
    });
  });
  //   e.preventDefault();
  //   console.log("クリックされました");
  // });

  //矢印の表示非表示切替
  window.addEventListener("scroll", () => {
    let nowY = window.pageYOffset;
    const scrollTarget = window.innerWidth > pcWidth ? 200 : 80;
    // console.log(nowY);
    if (nowY > scrollTarget) {
      pageTop.classList.add("active");
    } else {
      pageTop.classList.remove("active");
    }
  });
}
