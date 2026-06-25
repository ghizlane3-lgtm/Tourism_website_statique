let index = 0;

const video = document.querySelector(".video-card video");
const source = video.querySelector("source");
const title = document.querySelector(".video-content h3");
const desc = document.querySelector(".video-content p");
const rating = document.querySelector(".video-meta span");

const left = document.getElementById("left-arrow");
const right = document.getElementById("right-arrow");


const activities = [
  {
    title: "Let's ski in Michlifen",
    video: "4274798-uhd_3840_2160_25fps.mp4",
    description: "Michlifen Ski Station, located about 6 miles from Ifrane in Morocco's Middle Atlas Mountains, offers a modest, scenic winter sports experience often called the Moroccan Aspen. Operating between 1,880 and 2,060 meters, the station features two blue runs (400m and 600m) and is best visited from December to March for skiing, snowboarding, and sledding.",
    rating: "⭐⭐⭐⭐"
  },
  {
    title: "Walk in Cedar Forests",
    video: "1448735-uhd_4096_2160_24fps.mp4",
    description: "Walking in the Cedar Forests of Ifrane, located in the Middle Atlas Mountains, offers scenic, easy-to-moderate hiking trails, such as the Link Loop (3.6 mi) and Ifrane Source Vittel Loop (4.2 mi). These popular trails feature towering cedar trees, opportunities to spot Barbary macaques, and refreshing mountain air, with many routes easily accessible for families, hikers, and bikers.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    title: "Lift Skiing",
    video: "5843725-uhd_3840_2160_30fps.mp4",
    description: "Ski lifts are essential, usually paid, mechanisms in resorts that transport skiers up mountains, maximizing skiing time by reducing uphill, non-skiing effort. The primary types are aerial lifts (chairlifts, gondolas, cable cars) and surface lifts (T-bars, button lifts, magic carpets). Modern systems offer high-capacity, comfort features like heated seats, and access to varied terrain.",
    rating: "⭐⭐⭐⭐"
  }
];


function updateActivity() {
  source.src = activities[index].video;
  title.textContent = activities[index].title;
  desc.textContent = activities[index].description;
  rating.textContent = activities[index].rating;

  video.load();
}

right.addEventListener("click", () => {
  index = (index + 1) % activities.length;
  updateActivity();
});

left.addEventListener("click", () => {
  index = (index - 1 + activities.length) % activities.length;
  updateActivity();
})

  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  toggle.addEventListener("click", () => navLinks.classList.toggle("active")
  
);


updateActivity();


