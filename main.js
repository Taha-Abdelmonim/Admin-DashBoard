// Dropdown Navbar
let avatar = document.querySelector(".avatar"),
  notification = document.querySelector(".notification");

let dropMenu = (selector) => {
  selector.addEventListener("click", () => {
    let dropDownMenu = selector.querySelector(".dropdown-menu");
    dropDownMenu.classList.contains("active") ? dropDownMenu.classList.remove("active") : dropDownMenu.classList.add("active");
  });
};

dropMenu(avatar);
dropMenu(notification);

// SideBar Toggle
let sidebar = document.querySelector(".sidebar"),
  bars = document.querySelector(".bars");

bars.addEventListener("click", () => {
  sidebar.classList.contains("active") ? sidebar.classList.remove("active") : sidebar.classList.add("active");
});

let Visitors = [800, 320, 190, 250, 400, 600],
  Hired = [502, 203, 70, 200, 350, 400],
  years = [2015, 2016, 2017, 2018, 2019, 2020];

// Chart
var options = {
  chart: {
    type: "area",
    height: "100%",
    width: "100%",
  },
  series: [
    {
      name: "Visitors",
      type: "area",
      data: Visitors,
    },
    {
      name: "Hired",
      type: "area",
      data: Hired,
    },
  ],
  xaxis: {
    categories: [...years],
  },
  colors: ["#43a047", "#e65245", "#e43a15"],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

// Toggle Mode
let mode = document.querySelector(".mode i"),
  body = document.querySelector("body");

mode.addEventListener("click", (e) => {
  body.classList.toggle("dark");
  body.classList.contains("dark") ? (mode.className = "fas fa-sun") : (mode.className = "fas fa-moon");
});

window.onresize = () => {
  window.matchMedia("(max-width: 768px)").matches ? sidebar.classList.remove("active") : sidebar.classList.add("active");
};
