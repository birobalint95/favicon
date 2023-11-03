// import { createSkillCards } from "./create_skill_cards.js";
// import { createCertificationCards } from "./create_certification_cards.js";
// import { createHobbyCards } from "./create_hobby_cards.js";

$(document).ready(function(){

    let rolesJsonData;

    fetch("./static/json/role_details.json")
    .then(function(response){
    return response.json();
    })
    .then(function(roles){ 
        rolesJsonData = roles;
        console.log(roles);
    });

    console.log(rolesJsonData);


    // createSkillCards();
    // createCertificationCards();
    // createHobbyCards();
});
