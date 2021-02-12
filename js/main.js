"use strict";

{
  // const toTop = document.querySelectorAll("");
  // console.log(toTop);
  const pageTop = document.getElementById("js-pagetop");
  const ham = document.getElementById("js-ham");
  const hamLines = document.querySelectorAll(".hamLine");
  const smoothScrollTrigger = document.querySelectorAll('a[href~="#"]');
  const pcBreakPoint = 760;

  for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener("click", (e) => {
      e.preventDefault();
      //ページ内リンクが必要な場合、下記を実装
      // let href = smoothScrollTrigger[i].getAttribute("href");
      // let targetElement = document.getElementById(href.replace("#", ""));
      // console.log(targetElement);
      // const rect = targetElement.getBoundingClientRect().top;
      // const offset = window.pageYOffset;
      // const target = rect + offset;
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }

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

  //矢印の表示非表示切替
  window.addEventListener("scroll", () => {
    let nowY = window.pageYOffset;
    const scrollTarget = window.innerWidth > pcBreakPoint ? 200 : 20;
    if (nowY > scrollTarget) {
      pageTop.classList.add("active");
    } else {
      pageTop.classList.remove("active");
    }
  });
}
