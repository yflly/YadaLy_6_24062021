// CLOSE LIGHTBOX
const lightboxBtnClose = document.querySelector(".fa-times");

lightboxBtnClose.addEventListener("click", closeLightbox);

function closeLightbox() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("lightbox").style.display = "none";
  document.getElementById("rectangleLikePrice").style.display = "flex";
}