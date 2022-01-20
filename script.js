console.log("Hello 🌎");
const btn = document.querySelector("button"); // Get the button from the page
if (btn) {
  btn.onclick = function() {
    btn.classList.toggle("dipped");
  };
}
