let current = 0;
const slides = document.querySelectorAll(".slide");

function nextSlide(){

    if(current < slides.length-1){

        slides[current].classList.remove("active");
        current++;
        slides[current].classList.add("active");

        typeWriter(slides[current]);
    }

    document.getElementById("bgMusic").play()
    .catch(()=>{});
}

function typeWriter(slide){

    const element = slide.querySelector(".typewriter");

    if(!element) return;

    const text = element.dataset.text;

    element.innerHTML = "";

    let i = 0;

    const timer = setInterval(()=>{

        element.innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){
            clearInterval(timer);
        }

    },40);
}

function accepted(){

    confetti({
        particleCount:200,
        spread:100
    });

    document.getElementById("result").innerHTML =
    "You just made someone very happy ❤️";

    console.log("YES CLICKED");
}

function declined(){

    document.getElementById("result").innerHTML =
    "Thank you for being honest 💖";
    
    console.log("NO CLICKED");
}

setInterval(()=>{

    const heart = document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

},400);
