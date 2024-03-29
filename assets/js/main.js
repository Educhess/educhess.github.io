//common side navbar call

$(document).ready(function () {
  $(".sidenav").sidenav();
});

//Get the top button
var mybutton = document.getElementById("myBtn");

if (mybutton) {
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 350 ||
      document.documentElement.scrollTop > 350
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

//Footer and Navbar

let header = $(`
<!-- Dropdown Structure -->
<ul id="country" class="dropdown-content black-text">
  <li><a class="black-text" onclick="changeCountry('IND');">India</a></li>
  <li><a class="black-text" onclick="changeCountry('ROW');">Rest of World</a></li>
</ul>
<nav class="fixed-top black">
<div class="nav-wrapper">
  <a class="brand-logo">Educhess</a>
  <a href="#" data-target="mobile-demo" class="white-text sidenav-trigger"><i
          class="material-icons">menu</i></a>
 <ul class="right hide-on-med-and-down">
    <li><a class="white-text" href="index.html">Home</a></li>
    <li><a class="white-text" href="#about">About Us</a></li>
    <li><a class="white-text" href="#pricing">Gallery</a></li>
    <li><a class="white-text" href="form.html">Book Now</a></li>
    <!-- Dropdown Trigger -->
      <li><a class="dropdown-trigger white-text" data-target="country">Country<i class="material-icons right">arrow_drop_down</i></a></li>
    
      <!-- <li>
        <label for="switch-1" class="theme-switch">
          <input class="toggle-checkbox" type="checkbox" id="switch-1" name="theme" />
          <div class='toggle-slot'>
            <div class='sun-icon-wrapper'>
              <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
            </div>
            <div class='toggle-button-1 toggle-button'></div>
            <div class='moon-icon-wrapper'>
              <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
            </div>
          </div>
        </label>
      </li>
      -->
  </ul>
</div>
</nav>

<!--Side Nav Bar -->
<ul class="sidenav" id="mobile-demo">
  <li><a class="sidenav-close" href="#!"><i class="material-icons">close</i></a></li>
  <li><a class="black-text" href="index.html">Home</a></li>
  <li><a class="black-text" href="#whatareweupto">What are we upto?</a></li>
  <li><a class="black-text" href="#about">About Us</a></li>
  <li><a class="black-text" href="#pricing">Pricing</a></li>
  <li><a class="black-text" href="#book">Book Now</a></li>
  <!-- Dropdown Trigger -->
  <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>

      <!-- <li>
        <label for="switch-2" class="theme-switch">
        <input class="toggle-checkbox" type="checkbox" id="switch-2" name="theme" />
          <div class='toggle-slot'>
          <div class='sun-icon-wrapper'>
          <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
          </div>
          <div class='toggle-button-2 toggle-button'></div>
          <div class='moon-icon-wrapper'>
          <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
          </div>
          </div>
          </label>
      </li> -->
</ul>`);

let footer = $(`
<footer class="webintern-footer">
  <div class="footer-left">
    <div class="footer-text">
      <p>"Develop a passion for learning. If you do, you will never cease to grow."</p>
    </div>
    <div class="footer-icons">
      <a href="https://m.facebook.com/Educhess-121240309743197/?ref=content_filter" target="_blank" rel="author" class="facebook sub-footer-icon">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com/educhess_academy/" target="_blank" rel="author" class="instagram sub-footer-icon">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/company/educhess-academy" target="_blank" rel="author" class="linkedin sub-footer-icon">
      <i class="fab fa-linkedin"></i>
    </a>
      </div>
  </div>
  <div class="footer-right">
    <h6 class="display-7">Get in Touch</h6>
    <form style="width:80%; margin-left:7%;">
      <div class="name">
        Email: educhessacademy@gmail.com
      </div>
      <div class="email">
        Phone Number: +91 9663210464
      </div>
    </form>
  </div>
  
  <!-- <div class="tt-copy">
    <div class="container col-sm-6">
     <center class="text-animation">Made with <i class="fa fa-heart" style="color: red;"></i></center>
    </div>
  </div> -->
  
  </footer>`);
let bodyElement = $(`body`);
bodyElement.prepend(header);
bodyElement.append(footer);

/*JavaScript for toggle for light/dark mode*/

// selecting toggler dynamically as their are two separate code sections for the toggler to support both mobile screen and desktop screens
if (window.innerWidth <= 992) {
  var checkbox = document.querySelector("#switch-2");
  var toggler = document.querySelector(".toggle-button-2");
} else {
  var checkbox = document.querySelector("#switch-1");
  var toggler = document.querySelector(".toggle-button-1");
}

if (checkbox) {
  let a = localStorage.getItem("theme");
  document.documentElement.setAttribute("data-theme", a); // setting the initial theme to light

  if (localStorage.getItem("theme") === "dark") {
    checkbox.checked = true;
  }

  // selecting the footer text & footer icons
  const footerText = document.querySelector(".footer-text p");
  const footerIcons = document.querySelectorAll(".sub-footer-icon");

  // listening for click on toggler
  toggler.addEventListener("click", () => {
    if (checkbox.checked) {
      // if theme is dark then on the toggler click we have to make it light
      trans();
      // changing the color
      toggleDarkColor();

      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      /*
            if there is click on toggler and if theme is light (initially it will be light) then the theme should convert to dark
            */
      trans();
      // changing the color
      toggleLightColor();

      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });

  let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  };

  // function for changing color when dark theme is on.
  let toggleDarkColor = () => {
    footerIcons.forEach((icon) => {
      icon.style.backgroundColor = "transparent";

      // hover effect
      icon.addEventListener("mouseover", () => {
        icon.style.backgroundColor = "transparent";
      });

      icon.addEventListener("mouseleave", () => {
        icon.style.backgroundColor = "transparent";
      });
    });
  };

  // function for changing color when the light theme is on.
  let toggleLightColor = () => {
    footerIcons.forEach((icon) => {
      icon.style.backgroundColor = "transparent";
      // hover effect
      icon.addEventListener("mouseover", () => {
        icon.style.backgroundColor = "transparent";
      });

      icon.addEventListener("mouseleave", () => {
        icon.style.backgroundColor = "transparent";
      });
    });
  };
}

$(document).ready(function () {
  $(".dropdown-trigger").dropdown();
});

function changeCountry(country) {
  if (country === "IND") {
    localStorage.setItem("country", country);
  } else {
    localStorage.setItem("country", "ROW");
  }
  window.location.reload();
}
