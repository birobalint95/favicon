$(document).ready (function() {

    var allDetails = document.querySelectorAll(".about-skill-details")

    allDetails.forEach(details => {
    details.addEventListener("toggle", function() {
        isDetailsOpen = details.hasAttribute("open");
        numberOfRoles = details.getElementsByClassName("number-of-roles")[0];
        console.log(numberOfRoles.innerText);
        console.log(numberOfRoles.innerHTML);
        console.log(numberOfRoles.value);
        if (isDetailsOpen) {
            details.style.height = "145px";
        } else {
            details.style.height = "70px";
        }
    })
    });

});