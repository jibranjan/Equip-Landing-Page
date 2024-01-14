const insideNavEL = document.querySelector(".insideNav");

const btnEl1 = document.getElementById("showSideMenu");
btnEl1.addEventListener("click", function () {
  insideNavEL.classList.add("translate-x-0");
});
const btnEl2 = document.getElementById("hideSideMenu");
btnEl2.addEventListener("click", function () {
  insideNavEL.classList.remove("translate-x-0");
});

// How it works section:

// const img0El = document.querySelector(".img0");

// const assessmentEl = document.querySelector(".assessment");
// const assessmentHeadingEl = document.querySelector(".assessmentHeading");
// const assessmentIconEl = document.querySelector(".assessmentIcon");
// const assessmentDescriptionEl = document.querySelector(
//   ".assessmentDescription"
// );

// const dashboardEl = document.querySelector(".dashboard");
// const dashboardHeadingEl = document.querySelector(".dashboardHeading");
// const dashboardIconEl = document.querySelector(".dashboardIcon");
// const dashboardDescriptionEl = document.querySelector(".dashboardDescription");

// const questionsEl = document.querySelector(".questions");
// const questionsHeadingEl = document.querySelector(".questionsHeading");
// const questionsIconEl = document.querySelector(".questionsIcon");
// const questionsDescriptionEl = document.querySelector(".questionsDescription");

// const cheatingEl = document.querySelector(".cheating");
// const cheatingHeadingEl = document.querySelector(".cheatingHeading");
// const cheatingIconEl = document.querySelector(".cheatingIcon");
// const cheatingDescriptionEl = document.querySelector(".cheatingDescription");

// assessmentEl.addEventListener("mouseover", function () {
//   assessmentDescriptionEl.classList.remove("hidden");
//   assessmentHeadingEl.classList.add("text-white");
//   assessmentIconEl.classList.add("rotate-180");
//   // img0El.classList.add("hidden");
// });
// assessmentEl.addEventListener("mouseout", function () {
//   assessmentDescriptionEl.classList.add("hidden");
//   assessmentHeadingEl.classList.remove("text-white");
//   assessmentIconEl.classList.remove("rotate-180");
//   // img0El.classList.remove("hidden");
// });

// dashboardEl.addEventListener("mouseover", function () {
//   dashboardDescriptionEl.classList.remove("hidden");
//   dashboardHeadingEl.classList.add("text-white");
//   dashboardIconEl.classList.add("rotate-180");
//   // img0El.classList.add("hidden");
// });
// dashboardEl.addEventListener("mouseout", function () {
//   dashboardDescriptionEl.classList.add("hidden");
//   dashboardHeadingEl.classList.remove("text-white");
//   dashboardIconEl.classList.remove("rotate-180");
//   // img0El.classList.remove("hidden");
// });

// questionsEl.addEventListener("mouseover", function () {
//   questionsDescriptionEl.classList.remove("hidden");
//   questionsHeadingEl.classList.add("text-white");
//   questionsIconEl.classList.add("rotate-180");
//   // img0El.classList.add("hidden");
// });
// questionsEl.addEventListener("mouseout", function () {
//   questionsDescriptionEl.classList.add("hidden");
//   questionsHeadingEl.classList.remove("text-white");
//   questionsIconEl.classList.remove("rotate-180");
//   // img0El.classList.remove("hidden");
// });

// cheatingEl.addEventListener("mouseover", function () {
//   cheatingDescriptionEl.classList.remove("hidden");
//   cheatingHeadingEl.classList.add("text-white");
//   cheatingIconEl.classList.add("rotate-180");
//   // img0El.classList.add("hidden");
// });
// cheatingEl.addEventListener("mouseout", function () {
//   cheatingDescriptionEl.classList.add("hidden");
//   cheatingHeadingEl.classList.remove("text-white");
//   cheatingIconEl.classList.remove("rotate-180");
//   // img0El.classList.remove("hidden");
// });

let activeCardId = "howItWorksCardAssessment";

let cardElArray = document.querySelectorAll(".howItWorksCard");
cardElArray.forEach(function (cardEl) {
  cardEl.addEventListener("mouseover", function () {
    let cardElId = cardEl.getAttribute("id");
    if (activeCardId !== cardElId) {
      // to change image
      let PreviousActiveImgId = activeCardId + "-Img";
      // to change description
      let previousActiveDescriptionId = activeCardId + "-Des";
      // to change heading color
      let previousActiveHeadingId = activeCardId + "-Hed";
      // to rotate icon
      let previousActiveIconId = activeCardId + "-Icon";

      activeCardId = cardElId; // this line is same for all

      // image
      let previousActiveImgEl = document.getElementById(PreviousActiveImgId);
      previousActiveImgEl.classList.add("hidden");
      let NextActiveImgId = activeCardId + "-Img";
      let nextActiveImgEl = document.getElementById(NextActiveImgId);
      nextActiveImgEl.classList.remove("hidden");

      // description
      let previousActiveDescriptionEl = document.getElementById(
        previousActiveDescriptionId
      );
      previousActiveDescriptionEl.classList.add("hidden");
      let nextActiveDescriptionId = activeCardId + "-Des";
      let nextActiveDescriptionEl = document.getElementById(
        nextActiveDescriptionId
      );
      nextActiveDescriptionEl.classList.remove("hidden");

      // heading
      let previousActiveHeadingEl = document.getElementById(
        previousActiveHeadingId
      );
      let nextActiveHeadingId = activeCardId + "-Hed";
      let nextActiveHeadingEl = document.getElementById(nextActiveHeadingId);
      nextActiveHeadingEl.classList.add("text-white");
      previousActiveHeadingEl.classList.remove("text-white");

      // icon
      let previousActiveIconEl = document.getElementById(previousActiveIconId);
      let nextActiveIconId = activeCardId + "-Icon";
      previousActiveIconEl.classList.remove("rotate-180");
      let nextActiveIconEl = document.getElementById(nextActiveIconId);
      nextActiveIconEl.classList.add("rotate-180");
    }
  });
});
