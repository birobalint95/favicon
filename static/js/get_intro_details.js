fetch("./static/json/intro_details.json")
.then(function(response){
   return response.json();
})
.then(function(introDetails){
    let sectionOfCertificationCards = document.querySelector("#certification-cards-section");
    let jsonDataOfCertifications = introDetails["certifications"];
    let anchorItemsOfCertifications = "";

    let sectionOfHobbyCards = document.querySelector("#hobby-cards-section");
    let jsonDataOfHobbies = introDetails["hobbies"];
    let divItemsOfHobbies = "";

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

    for(let hobby of jsonDataOfHobbies){
        divItemsOfHobbies += `
            <div class="hobby-card" style="display: flex;">
                <div>
                    <img class="hobby-icon" src="${hobby.image_location}" alt="CV photo" style="max-width: 100%; max-height: 100%; display: block; border-radius: 10px;">
                </div>
                <div class="hobby-card-content">
                    <p class="hobby-description">${hobby.name}</p>
                </div>
            </div>
        `;
    }
    
    sectionOfCertificationCards.innerHTML = anchorItemsOfCertifications;
    sectionOfHobbyCards.innerHTML = divItemsOfHobbies;
});
