"use strict";
// digital

if (document.location.href.includes("thu-cung")) {
  document.querySelector(".container-thu-cung").classList.toggle("hidden");
} else if (document.location.href.includes("cv")) {
  document.querySelector(".container-cv").classList.toggle("hidden");
} else if (document.location.href.includes("tin-tuc")) {
  document.querySelector(".container-tin-tuc").classList.toggle("hidden");
}
