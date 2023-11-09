export {createHobbyCards};

function createHobbyCards(introJsonData){ 
    let jsonDataOfHobbies = introJsonData["hobbies"];
    for(let hobby of jsonDataOfHobbies){
        // CREATE CARD
        let hobbyCard = createGenericCardWithImage(hobby.name, hobby.image_location);
        // ADD CARD TO ITS SECTION
        const hobbyCardSection = document.getElementById("hobby-cards-section");
        hobbyCardSection.appendChild(hobbyCard);
    }
};

function createGenericCardWithImage(text, image_location){
    // CARD ELEMENT
    const genericCardWithImage = document.createElement("div");
    genericCardWithImage.setAttribute("class", "generic-card-with-image");
    // IMAGE OF CARD ELEMENT
    const imgOfGenericCard = document.createElement("img");
    imgOfGenericCard.setAttribute("class", "image-of-generic-card");
    imgOfGenericCard.setAttribute("src", `${image_location}`);
    genericCardWithImage.appendChild(imgOfGenericCard)
    // TEXT OF CARD ELEMENT
    const textOfGenericCard = document.createElement("span");
    textOfGenericCard.setAttribute("class", "content-of-generic-card");
    textOfGenericCard.innerText = `${text}`;
    genericCardWithImage.appendChild(textOfGenericCard);
    return genericCardWithImage
}
