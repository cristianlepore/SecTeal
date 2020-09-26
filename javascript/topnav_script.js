// *************************************************************** /
// Change color of the items on topbar.
var btnContainer = document.getElementById("myTopnav");

// Get all buttons with class="btn" inside the container.
var items = btnContainer.getElementsByClassName("item");

// Loop through the buttons and add the active class to the current/clicked button.
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}
// *************************************************************** /

// *************************************************************** /
// Responsive topbar when reduce screen width (for smartphones and tablets).
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className = "topnav responsive";
    } else {
        x.className = "topnav";
    }
}

// *************************************************************** /

// *************************************************************** /
// Close Topnav when clicking anywhere on the screen.
$(document).click(function (e) {
    if (!$(e.target).is('a')) {
        $('.collapse').collapse('hide');
    }
});

// *************************************************************** /

// *************************************************************** /
// When the user scrolls the page, execute myFunction
// Visualizza il bottone top in basso a destra della pagina ed anche la progress bar in alto
var mybutton = document.getElementById("myBtn");

window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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
// *************************************************************** /

// Insert date and time in the copyright section
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

// *************************************************************** /