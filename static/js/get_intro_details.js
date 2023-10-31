fetch("./static/json/intro_details.json")
.then(function(response){
   return response.json();
})
.then(function(introDetails){
    let sectionOfCertificationCards = document.querySelector("#certification-cards-section");
    let anchorItemsOfCertifications = "";

    let jsonDataOfCertifications = introDetails["certifications"];

    console.log(jsonDataOfCertifications);

    for(let certification of jsonDataOfCertifications){
        console.log(certification.name);
        console.log(certification.image_location);
        console.log(certification.pdf_location);
    }
    
    sectionOfCertificationCards.innerHTML = anchorItemsOfCertifications;
});
