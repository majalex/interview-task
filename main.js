let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

window.addEventListener("scroll", function(){
  let header = document.querySelector(".sticky-menu");
  header.classList.toggle("sticky", window.scrollY > 50)
});


function openTab(tabName) {
  let i;
  let x = document.getElementsByClassName("tabcontent");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

function scrollDisable() {
  document.querySelector("body").style.overflowY = "hidden";
}
function scrollEnable() {
  document.querySelector("body").style.overflowY = "visible";
}

function toggleMenu() {
  let x = document.getElementById("toggle");
  if (x.style.display === "block") {
    x.style.display = "none";
    scrollEnable();
  } else {
    x.style.display = "block";
    scrollDisable();
  }
}

