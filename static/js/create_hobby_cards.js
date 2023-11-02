document.body.onload = createHobbyCards;

function createHobbyCards(){
    fetch("./static/json/intro_details.json")
    .then(function(response){
    return response.json();
    })
    .then(function(introDetails){    

        let jsonDataOfHobbies = introDetails["hobbies"];

        for(let hobby of jsonDataOfHobbies){
            // DIV ELEMENT
            const hobbyCard = document.createElement("div");
            hobbyCard.setAttribute("class", "hobby-card");
            hobbyCard.setAttribute("style", "display: flex;");

            // DIV 1 OF MAIN DIV
            const div1OfHobbyCard = document.createElement("div");
            div1OfHobbyCard.setAttribute("class", "hobby-icon");
            div1OfHobbyCard.setAttribute("src", `${hobby.image_location}`);
            div1OfHobbyCard.setAttribute("style", "max-width: 100%; max-height: 100%; display: block; border-radius: 10px;");
            hobbyCard.appendChild(div1OfHobbyCard);

            // DIV 2 OF MAIN DIV
            const div2OfHobbyCard = document.createElement("div");
            div2OfHobbyCard.setAttribute("class", "hobby-card-content");

            // PARAGRAPH OF DIV 2
            const paragraphOfDiv2 = document.createElement("p");
            paragraphOfDiv2.setAttribute("class", "hobby-description");
            paragraphOfDiv2.insertAdjacentHTML("beforeend", `${hobby.name}`)
            div2OfHobbyCard.appendChild(paragraphOfDiv2);
            hobbyCard.appendChild(div2OfHobbyCard);

            // ADD HOBBY CARD TO ITS SECTION
            const hobbyCardSection = document.getElementById("hobby-cards-section");
            hobbyCardSection.appendChild(hobbyCard);

        }
    });
};