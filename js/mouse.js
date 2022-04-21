//로드 이벤트 : 모든 태그, 이미지 등이 로드되면 실행
window.onload = function () {
  var mouseCursor = document.querySelector(".cursor");
  var navLinks = document.querySelectorAll(".gnbMenu li");
  console.log(navLinks);

  navLinks.forEach(function (menu) {
    console.log(menu);
    menu.addEventListener("mouseover", function () {
      mouseCursor.classList.add("link_hover");
      mouseCursor.style.zIndex = "-1";
    });
    menu.addEventListener("mouseout", function () {
      mouseCursor.classList.remove("link_hover");
      mouseCursor.style.zIndex = "5";
    });
  });

  document.querySelectorAll(".text1").forEach((em) => {
    em.addEventListener("mouseover", () => {
      mouseCursor.classList.add("show2");
    });
    em.addEventListener("mouseout", () => {
      mouseCursor.classList.remove("show2");
    });
  });

  document.querySelectorAll(".text2").forEach((em) => {
    em.addEventListener("mouseover", () => {
      mouseCursor.classList.add("show3");
    });
    em.addEventListener("mouseout", () => {
      mouseCursor.classList.remove("show3");
    });
  });
  // 함수 선언
  function myCursor(e) {
    document.querySelector(".cursor").style.top = e.pageY + "px";
    document.querySelector(".cursor").style.left = e.pageX + "px";
  }

  window.addEventListener("mousemove", myCursor);
};
