const mybutton = document.getElementById("backtotopicon");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = () => {
  mybutton.style.display =
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
      ? "block"
      : "none";
};

// Scroll to the top of the document when the button is clicked
mybutton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
