$(document).ready (function() {

    var allDetails = document.querySelectorAll(".about-skill-details")

    allDetails.forEach(details => {
    details.addEventListener("toggle", function() {
        isDetailsOpen = details.hasAttribute("open");
        numberOfRoles = details.getElementsByClassName("number-of-roles")[0];
        numberOfRolesInt = parseInt(numberOfRoles.innerText);
        if (isDetailsOpen) {
            requiredHeight = 90 + (numberOfRolesInt - 1)*27;
            details.style.height = requiredHeight.toString() + "px";
        } else {
            details.style.height = "70px";
        }
    })
    });

});