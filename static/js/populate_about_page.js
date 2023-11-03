import { createTechnicalSkillCards } from "./create_skill_cards.js";
import { createLanguageSkillCards } from "./create_skill_cards.js";
import { createCertificationCards } from "./create_certification_cards.js";
import { createHobbyCards } from "./create_hobby_cards.js";

$(document).ready(function(){

    fetch("./static/json/role_details.json")
    .then(function(response){
    return response.json();
    })
    .then(function(rolesJsonData){
        createTechnicalSkillCards(rolesJsonData);
    });

    fetch("./static/json/intro_details.json")
    .then(function(response){
    return response.json();
    })
    .then(function(introJsonData){
        createLanguageSkillCards(introJsonData);
        createCertificationCards(introJsonData);
        createHobbyCards(introJsonData);
    });
});
