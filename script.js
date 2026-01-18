const textarea = document.getElementById("message");
const charCount = document.getElementById("charCount");
const remainingChars = document.getElementById("remainingChars");
const warningMessage = document.getElementById("warningMessage");
const maxChar = 200;

function updateCounter() {
  const length = textarea.value.length;
  const remaining = maxChar - length;

  charCount.textContent = `${length}/${maxChar} characters`;
  remainingChars.textContent = `${remaining} remaining`;

  charCount.className = "";
  textarea.className = "";
  warningMessage.classList.remove("show");

  if (length >= maxChar * 0.9) {
    charCount.classList.add("warning");
    textarea.classList.add("warning");
  }

  if (length >= maxChar) {
    charCount.classList.add("max");
    textarea.classList.add("max-reached");
    warningMessage.classList.add("show");
  }
}

textarea.addEventListener("input", updateCounter);
updateCounter();
