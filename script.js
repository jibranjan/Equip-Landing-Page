// Nav animation
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
