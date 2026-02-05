const text = "Will you be my Valentine? 💘";
let index = 0;

function typeText() {
  if (index < text.length) {
    document.getElementById("question").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 90);
  }
}
typeText();

function runAway(btn) {
  const x = Math.random() * (window.innerWidth - btn.offsetWidth);
  const y = Math.random() * (window.innerHeight - btn.offsetHeight);
  btn.style.position = "fixed";
  btn.style.left = x + "px";
  btn.style.top = y + "px";
}

function yes() {
  document.getElementById("response").innerHTML =
    "YAY!!! 💕 I can’t wait to spend Valentine’s Day with you 🥰";

  launchHearts();
}

function launchHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "24px";
    heart.style.animation = "float 3s ease-in forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}
