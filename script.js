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

function accepted() {

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
.then(function() {

alert("❤️ Your answers have been sent!");

})
.catch(function(error) {

alert("Failed to send answers");
console.log(error);

});

function bestFriend() {
  document.getElementById("result").innerHTML =
  "😄 Best friends sounds wonderful too!";
}

function needTime() {
  document.getElementById("result").innerHTML =
  "😊 Take all the time you need.";
        }
