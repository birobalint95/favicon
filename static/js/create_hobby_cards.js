export {createHobbyCards};

function createHobbyCards(introJsonData){ 

    let jsonDataOfHobbies = introJsonData["hobbies"];

    for(let hobby of jsonDataOfHobbies){
        // DIV ELEMENT
        const hobbyCard = document.createElement("div");
        hobbyCard.setAttribute("class", "hobby-card");
        hobbyCard.setAttribute("style", "display: flex;");

        // DIV 1 OF MAIN DIV
        // const div1OfHobbyCard = document.createElement("div");
        const imgOfHobbyCard = document.createElement("img");
        imgOfHobbyCard.setAttribute("class", "hobby-icon");
        imgOfHobbyCard.setAttribute("src", `${hobby.image_location}`);
        imgOfHobbyCard.setAttribute("style", "max-width: 100%; max-height: 100%; display: block; border-radius: 10px;");
        // div1OfHobbyCard.appendChild(imgOfHobbyCard);
        // hobbyCard.appendChild(div1OfHobbyCard);
        hobbyCard.appendChild(imgOfHobbyCard)

        // DIV 2 OF MAIN DIV
        const div2OfHobbyCard = document.createElement("div");
        div2OfHobbyCard.setAttribute("class", "hobby-card-content");

        // PARAGRAPH OF DIV 2
        // const paragraphOfDiv2 = document.createElement("p");
        // paragraphOfDiv2.setAttribute("class", "hobby-description");
        // paragraphOfDiv2.insertAdjacentHTML("beforeend", `${hobby.name}`)
        // div2OfHobbyCard.appendChild(paragraphOfDiv2);
        div2OfHobbyCard.innerText = `${hobby.name}`;
        hobbyCard.appendChild(div2OfHobbyCard);

        // ADD HOBBY CARD TO ITS SECTION
        const hobbyCardSection = document.getElementById("hobby-cards-section");
        hobbyCardSection.appendChild(hobbyCard);

    }
};

{/* <div class="hobby-card" style="display: flex;">
    <img class="hobby-icon" src="./static/images/hobby_hiking.svg" style="max-width: 100%; max-height: 100%; display: block; border-radius: 10px;"/>
    <div class="hobby-card-content">Hiking</div>
</div> */}
