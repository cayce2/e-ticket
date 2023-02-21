// Open and Close Navbar Menu
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const bgOverlay = document.querySelector(".overlay");

if (burgerMenu && bgOverlay) {
   burgerMenu.addEventListener("click", () => {
      navbarMenu.classList.add("is-active");
      bgOverlay.classList.toggle("is-active");
   });

   bgOverlay.addEventListener("click", () => {
      navbarMenu.classList.remove("is-active");
      bgOverlay.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Links Click
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      navbarMenu.classList.remove("is-active");
      bgOverlay.classList.remove("is-active");
   });
});

// Open and Close Search Bar Toggle
const searchBlock = document.querySelector(".search-block");
const searchToggle = document.querySelector(".search-toggle");
const searchCancel = document.querySelector(".search-cancel");

if (searchToggle && searchCancel) {
   searchToggle.addEventListener("click", () => {
      searchBlock.classList.add("is-active");
   });

   searchCancel.addEventListener("click", () => {
      searchBlock.classList.remove("is-active");
   });
}

$(".filter a").click(function (e) {
        e.preventDefault();
        var a = $(this).attr("href");
        a = a.substr(1);
        $(".sets a").each(function () {
          if (!$(this).hasClass(a) && a != "") $(this).addClass("hide");
          else $(this).removeClass("hide");
        });

    

// Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("btncontainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        var current = document.getElementsByClassName("btn-active");
        current[0].className = current[0].className.replace(" btn-active", "");
        this.className += " btn-active";

    }
});


let imgs = document.querySelectorAll("img");
      let count;
      imgs.forEach((img, index) => {
        img.addEventListener("click", function (e) {
          if (e.target == this) {
            count = index;
            let openDiv = document.createElement("div");
            let imgPreview = document.createElement("img");
            let butonsSection = document.createElement("div");
            butonsSection.classList.add("butonsSection");
            let closeBtn = document.createElement("button");
            let nextBtn = document.createElement("button");
            let prevButton = document.createElement("button");
            prevButton.innerText = "Previous";
            nextBtn.innerText = "Next";

            nextBtn.classList.add("nextButton");
            prevButton.classList.add("prevButton");
            nextBtn.addEventListener("click", function () {
              if (count >= imgs.length - 1) {
                count = 0;
              } else {
                count++;
              }

              imgPreview.src = imgs[count].src;
            });

            prevButton.addEventListener("click", function () {
              if (count === 0) {
                count = imgs.length - 1;
              } else {
                count--;
              }

              imgPreview.src = imgs[count].src;
            });

            closeBtn.classList.add("closeBtn");
            closeBtn.innerText = "Close";
            closeBtn.addEventListener("click", function () {
              openDiv.remove();
            });

            imgPreview.classList.add("imgPreview");
            imgPreview.src = this.src;

            butonsSection.append(prevButton, nextBtn);
            openDiv.append(imgPreview, butonsSection, closeBtn);

            openDiv.classList.add("openDiv");

            document.querySelector("body").append(openDiv);
          }
        });
      });