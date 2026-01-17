/* NAME LETTER BY LETTER */
const nameText = "Isha ❤️";
let nameIndex = 0;

function typeName() {
    if (nameIndex < nameText.length) {
        document.getElementById("name").innerHTML += nameText.charAt(nameIndex);
        nameIndex++;
        setTimeout(typeName, 200);
    }
}
typeName();



/* ANNIVERSARY TEXT */
const text = "Happy 1 Week Anniversary ❤️ I love you Isha";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
setTimeout(typeEffect, 3000);

/* FLOATING HEARTS */
setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}, 300);

/* PASSWORD */
function unlock() {
    const pass = document.getElementById("password").value;
    if (pass === "isha") {
        document.getElementById("hiddenMessage").style.display = "block";
    } else {
        alert("Wrong password 💔");
    }
}
