// make menu slide down as we scroll down page
/**window.addEventListener("srcoll", function(){
  var nav = document.querySelector("nav")
  nav.classList.toggle("sticky", window.scrollY > 0)
})**/

/**window.onscroll = function() {myFunction()};
var nav = document.getElementById("nav");
var sticky = nav.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}**/
//make icons {lol}{win}{upward-trend} jump up when hovered


//make dropdown of sandwich menu

//add arrow to go up to the beginning of the page once you pass certain page point scrolling down



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

function openMenu() {
    var x = document.getElementById("button").getAttribute("aria-expanded"); 
    if (x == "true") 
    {
    x = "false"
    } else {
    x = "true"
    }
    document.getElementById("button").setAttribute("aria-expanded", x);
    }



// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementByTagName("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}