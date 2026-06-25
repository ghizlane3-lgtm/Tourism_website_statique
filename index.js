const slider = document.querySelector(".slider");
const nextBtn = document.getElementById("right-arrow");
const prevBtn = document.getElementById("left-arrow");
const button = document.querySelector('#discover');



const word = document.getElementById("word");
const welcome = document.getElementById("welcome");
const discover=document.getElementById("discover");

function updateActive() {
  const activecard = document.querySelector(".card.active");
  document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
  slider.children[0].classList.add("active");
}

function updatelink() {
  const activecard = document.querySelector(".card.active");
  if (!activecard) return;

  discover.href = activecard.dataset.link;
}





function updatebg() {
  const activecard = document.querySelector(".card.active");
 
  if (!activecard) return;

  document.body.style.setProperty(
    "--bg-image",
    `url("${activecard.dataset.bg}")`
  );
}

function updatedesc() {
  const activecard = document.querySelector(".card.active");
  if (!activecard) return;

  const title = activecard.dataset.title;
  const desc = activecard.dataset.desc;

  // rotate + move down slightly
  welcome.style.transform = "translateY(20px) rotateX(90deg)";
  welcome.style.opacity = "0";

  setTimeout(() => {
    welcome.textContent = title;
    word.textContent = desc;

    // rotate back + reset position
    welcome.style.transform = "translateY(0) rotateX(0deg)";
    welcome.style.opacity = "1";
  }, 300);
}


function updatediscover()
{
  const activecard = document.querySelector(".card.active");
  discover.style.backgroundColor=activecard.dataset.cl;
}
updatediscover();

updatebg();

// RIGHT 
nextBtn.onclick = () => {
  const firstCard = slider.firstElementChild;
  slider.appendChild(firstCard); // move first to end
 
  updateActive();
  updatebg();
  updatedesc();
  updatediscover();
  updatelink();
};

// LEFT ⬅
prevBtn.onclick = () => {
  const lastCard = slider.lastElementChild;
  slider.prepend(lastCard); // move last to start
  updateActive();
  updatebg();
  updatedesc();
  updatediscover();
  updatelink();
};

// initial
updateActive();
updatelink();


// ===== MOBILE SWIPE =====
let touchStartX = 0;

slider.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });

slider.addEventListener("touchend", (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) < 30) return;

  if (diff > 0) {
    const firstCard = slider.firstElementChild;
    slider.appendChild(firstCard);
  } else {
    const lastCard = slider.lastElementChild;
    slider.prepend(lastCard);
  }

  updateActive();
  updatebg();
  updatedesc();
  updatediscover();
  updatelink();
});


document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    updatebg();
    updatedesc();
    updatediscover();
    updatelink();
  });
});