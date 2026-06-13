alert("script loaded");

let current = 0;
const slides = document.querySelectorAll(".slide");

// Slide Navigation
function nextSlide() {
    if (current < slides.length - 1) {
        slides[current].classList.remove("active");
        current++;

        slides[current].classList.add("active");
        typeWriter(slides[current]);
    }

    const music = document.getElementById("bgMusic");
    if (music) {
        music.play().catch(() => {});
    }
}

// Typewriter Effect
function typeWriter(slide) {
    const element = slide.querySelector(".typewriter");

    if (!element) return;

    const text = element.dataset.text;
    element.innerHTML = "";

    let i = 0;

    const timer = setInterval(() => {
        element.innerHTML += text.charAt(i);
        i++;

        if (i >= text.length) {
            clearInterval(timer);
        }
    }, 40);
}

// Floating Hearts Background
setInterval(() => {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 400);

// Send Answers to EmailJS
function sendAnswers() {

    const q1 = document.getElementById("q1").value;
    const q2 = document.getElementById("q2").value;
    const q3 = document.getElementById("q3").value;
    const q4 = document.getElementById("q4").value;

    emailjs.send(
        "service_elk7xgm",
        "template_cpj25po",
        {
            q1: q1,
            q2: q2,
            q3: q3,
            q4: q4,
            choice: "Answers Submitted"
        }
    )
    .then(function () {

        alert("❤️ Your answers have been sent!");

    })
    .catch(function(error) {

alert(JSON.stringify(error));

console.log(error);

});

    });
}

// YES Button
function accepted() {

    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });

    document.getElementById("result").innerHTML = `
        <h2>🎉 SHE SAID YES ❤️</h2>
        <p>
        Mission Successful 😎❤️
        <br><br>
        I was nervous, but now I'm smiling like an idiot. 😄
        <br><br>
        Thank you for making this day unforgettable. ✨
        </p>
    `;

    emailjs.send(
        "service_elk7xgm",
        "template_cpj25po",
        {
            choice: "❤️ YES"
        }
    );
}

// BEST FRIEND Button
function bestFriend() {

    document.getElementById("result").innerHTML = `
        <h2>😄 BEST FRIENDS</h2>
        <p>
        Friendship is also something special 💙✨
        </p>
    `;

    for (let i = 0; i < 40; i++) {

        const emoji = document.createElement("div");

        emoji.innerHTML = "😄";
        emoji.className = "heart";
        emoji.style.left = Math.random() * 100 + "vw";

        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 5000);
    }

    emailjs.send(
        "service_elk7xgm",
        "template_cpj25po",
        {
            choice: "😄 BEST FRIEND"
        }
    );
}

// NEED MORE TIME Button
function needTime() {

    document.getElementById("result").innerHTML = `
        <h2>😊 TAKE YOUR TIME</h2>
        <p>
        No pressure at all ❤️
        <br>
        I'll respect your decision.
        </p>
    `;

    for (let i = 0; i < 40; i++) {

        const star = document.createElement("div");

        star.innerHTML = "✨";
        star.className = "heart";
        star.style.left = Math.random() * 100 + "vw";

        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 5000);
    }

    emailjs.send(
        "service_elk7xgm",
        "template_cpj25po",
        {
            choice: "😊 NEED MORE TIME"
        }
    );
}
