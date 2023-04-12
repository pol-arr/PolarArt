function toggleNav() {
  var x = document.getElementsByClassName("buttons-phone")[0];
  const phoneIcon = document.querySelector(".phone-icon");
  phoneIcon.classList.toggle("active");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
