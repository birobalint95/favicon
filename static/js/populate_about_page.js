import { createTechnicalSkillCards } from "./create_skill_cards.js";
import { createLanguageSkillCards } from "./create_skill_cards.js";
import { createCertificationCards } from "./create_certification_cards.js";
import { createHobbyCards } from "./create_hobby_cards.js";

export {populatePage};

function populatePage(pageName){

    console.log(pageName);

    fetch("./static/json/role_details.json")
    .then(function(response){
    return response.json();
    })
    .then(function(rolesJsonData){
        if (pageName == "index") {
            createTechnicalSkillCards(rolesJsonData);
        } else if (pageName == "experiences") {
            console.log("IDE JON EXPERIENCES");
        }
        
    });

    if (pageName == "index") {
        fetch("./static/json/intro_details.json")
        .then(function(response){
        return response.json();
        })
        .then(function(introJsonData){
            createLanguageSkillCards(introJsonData);
            createCertificationCards(introJsonData);
            createHobbyCards(introJsonData);
        });
    }
}
