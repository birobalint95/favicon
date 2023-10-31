fetch("./static/json/intro_details.json")
.then(function(response){
   return response.json();
})
.then(function(introDetails){
    let sectionOfCertificationCards = document.querySelector("#certification-cards-section");
    let anchorItemsOfCertifications = "";

    let jsonDataOfCertifications = introDetails["certifications"];

    for(let certification of jsonDataOfCertifications){
        anchorItemsOfCertifications += `
            <a class="certification-card" href="${certification.pdf_location}">
                <img src="${certification.image_location}" alt="image" />
                <div class="certification-card-content">
                    <p>${certification.name}</p>
                </div>
            </a>
        `;
    }
    
    sectionOfCertificationCards.innerHTML = anchorItemsOfCertifications;
});
