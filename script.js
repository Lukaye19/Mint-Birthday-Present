function checkOrientation() {
  if (window.innerHeight > window.innerWidth) {
    document.body.classList.add("portrait");
    document.body.classList.remove("landscape");
  } else {
    document.body.classList.add("landscape");
    document.body.classList.remove("portrait");
  }
}

window.addEventListener("resize", checkOrientation);
checkOrientation();
