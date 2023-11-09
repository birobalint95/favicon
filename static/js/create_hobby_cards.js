export {createHobbyCards};

function createHobbyCards(introJsonData){ 

    let jsonDataOfHobbies = introJsonData["hobbies"];

    for(let hobby of jsonDataOfHobbies){
        // CARD
        const hobbyCard = document.createElement("div");
        hobbyCard.setAttribute("class", "generic-card-with-image");
        // hobbyCard.setAttribute("style", "display: flex;");

        // CARD IMAGE
        const imgOfHobbyCard = document.createElement("img");
        imgOfHobbyCard.setAttribute("class", "image-of-generic-card");
        imgOfHobbyCard.setAttribute("src", `${hobby.image_location}`);
        // imgOfHobbyCard.setAttribute("style", "max-width: 100%; max-height: 100%; display: block; border-radius: 10px;");
        hobbyCard.appendChild(imgOfHobbyCard)

        // CARD TEXT
        const div2OfHobbyCard = document.createElement("div");
        div2OfHobbyCard.setAttribute("class", "content-of-generic-card");
        div2OfHobbyCard.innerText = `${hobby.name}`;
        hobbyCard.appendChild(div2OfHobbyCard);

        // ADD CARD TO ITS SECTION
        const hobbyCardSection = document.getElementById("hobby-cards-section");
        hobbyCardSection.appendChild(hobbyCard);

    }
};
