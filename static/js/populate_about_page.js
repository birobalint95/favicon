import { createSkillCards } from "./create_skill_cards.js";
// import { createCertificationCards } from "./create_certification_cards.js";
// import { createHobbyCards } from "./create_hobby_cards.js";

$(document).ready(function(){

    fetch("./static/json/role_details.json")
    .then(function(response){
    return response.json();
    })
    .then(function(rolesJsonData){
        console.log(rolesJsonData);
        createSkillCards(rolesJsonData);
    });



    // createSkillCards();
    // createCertificationCards();
    // createHobbyCards();
});
