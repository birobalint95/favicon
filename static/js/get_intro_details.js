fetch("./static/json/intro_details.json")
.then(function(response){
   return response.json();
})
.then(function(roles){
    let sectionOfCertificationCards = document.querySelector("#certification-cards-section");
    let anchorItemsOfCertifications = "";
    
    let indexOfRole = 1;
    for(let role of roles){

        console.log(role);

        indexOfRole++;
   }

   sectionOfCertificationCards.innerHTML = anchorItemsOfCertifications;
});
