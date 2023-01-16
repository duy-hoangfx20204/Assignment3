"use strict";
//thong tin dang nhap
const emailNhap = document.querySelector(".email-nhap");
const emailThongTin = document.querySelector(".email-thongtin");
const inputEmail = document.querySelector(".input-email");
("use strict");
let a = /^$/;
function validateEmail(inputText) {
  let mailformat = /^\w+([\.-]*\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputEmail.value.match(mailformat)) {
    emailNhap.classList.add("hidden");
    emailThongTin.classList.remove("hidden");
  } else {
    alert("Invalid email address!");
  }
}
//an noi dung
const nutthem = document.querySelectorAll(".nutthem");
console.log(nutthem);
for (let i = 0; i < nutthem.length; i++) {
  const btnViewmore = nutthem[i].children;
  const btnParentEl = nutthem[i];
  nutthem[i].parentElement.addEventListener("mouseover", function () {
    btnViewmore[1].classList.remove("hidden");
  });
  //  đầu ra//
  nutthem[i].parentElement.addEventListener("mouseout", function () {
    btnViewmore[1].classList.add("hidden");
  });
  btnViewmore[1].addEventListener("click", function () {
    const cardContent = btnParentEl.parentElement.nextElementSibling;
    if (
      btnViewmore[1].textContent == `▲ VIEW LESS` &&
      !btnViewmore[1].classList.contains("hidden")
    ) {
      cardContent.classList.add("hidden");
      btnViewmore[1].textContent = `▼ VIEW MORE`;
    } else {
      cardContent.classList.remove("hidden");
      btnViewmore[1].textContent = `▲ VIEW LESS`;
    }
  });
}
