"use strict";

{
  const pageTop = document.getElementById("js-pageTop");
  const ham = document.getElementById("js-ham");
  const hamLines = document.querySelectorAll(".hamLine");
  const mask = document.getElementById("js-overlayMask");
  const menu = document.getElementById("js-overlayMenu");
  const smoothScrollTrigger = document.querySelectorAll('a[href~="#"]');
  const pcBreakPoint = 760;

  const inactive = () => {
    hamLines.forEach((hamLine) => {
      hamLine.classList.remove("active");
    });
    mask.classList.remove("active");
    menu.classList.remove("active");
  };

  for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener("click", (e) => {
      e.preventDefault();
      //ページ内リンクが必要な場合、下記を追加実装
      // let href = smoothScrollTrigger[i].getAttribute("href");
      // let targetElement = document.getElementById(href.replace("#", ""));
      // console.log(targetElement);
      // const rect = targetElement.getBoundingClientRect().top;
      // const offset = window.pageYOffset;
      // const target = rect + offset;
      inactive();
      window.scrollTo({
        top: 0,
        // top:target,
        left: 0,
        behavior: "smooth",
      });
    });
  }

  ham.addEventListener("click", () => {
    hamLines.forEach((hamLine) => {
      hamLine.classList.toggle("active");
    });
    mask.classList.toggle("active");
    menu.classList.toggle("active");
  });

  mask.addEventListener("click", () => {
    console.log("クリックされました");
    inactive();
  });

  //本来のpageTopの挙動
  // pageTop.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   inactive();
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // });

  //矢印の表示非表示切替
  window.addEventListener("scroll", () => {
    let nowY = window.pageYOffset;
    const scrollTarget = window.innerWidth > pcBreakPoint ? 80 : 20;
    if (nowY > scrollTarget) {
      pageTop.classList.add("active");
    } else {
      pageTop.classList.remove("active");
    }
  });
}
