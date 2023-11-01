$(document).ready (function() {

    var allDetails = document.querySelectorAll(".about-skill-details")

    allDetails.forEach(details => {
    details.addEventListener("toggle", function() {
        isDetailsOpen = details.hasAttribute("open");
        numberOfRoles = details.getElementsByClassName("number-of-roles");
        console.log(numberOfRoles.innerText);
        if (isDetailsOpen) {
            details.style.height = "145px";
        } else {
            details.style.height = "70px";
        }
    })
    });

});