$(document).ready(function(){
    createCertificationCards();
 });

function createCertificationCards(){

    fetch("./static/json/intro_details.json")
    .then(function(response){
    return response.json();
    })
    .then(function(introDetails){    

        let jsonDataOfCertifications = introDetails["certifications"];

        for(let certification of jsonDataOfCertifications){
            // ANCHOR ELEMENT
            const certificationCard = document.createElement("a");
            certificationCard.setAttribute("class", "certification-card");
            certificationCard.setAttribute("href", `${certification.pdf_location}`);

            // IMAGE OF ANCHOR
            const imageOfCertificationCard = document.createElement("img");
            imageOfCertificationCard.setAttribute("src", `${certification.image_location}`);
            certificationCard.appendChild(imageOfCertificationCard);

            // DIV OF ANCHOR
            const divOfCertificationCard = document.createElement("div");
            divOfCertificationCard.setAttribute("class", "certification-card-content");

            // PARAGRAPH OF DIV
            const paragraphOfDiv = document.createElement("p");
            paragraphOfDiv.insertAdjacentHTML("beforeend", `${certification.name}`)
            divOfCertificationCard.appendChild(paragraphOfDiv);
            certificationCard.appendChild(divOfCertificationCard);

            // ADD CERTIFICATION CARD TO ITS SECTION
            const certificationCardSection = document.getElementById("certification-cards-section");
            certificationCardSection.appendChild(certificationCard);

        }
    });
};