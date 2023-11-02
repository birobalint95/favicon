importScripts("./create_skill_cards.js")
import { createTechnicalSkillCard, createLanguageSkillCard } from "./create_skill_cards.js";

document.body.onload = populateAboutPage;

function populateAboutPage(){

    fetch("./static/json/role_details.json")
    .then(function(response){
    return response.json();
    })
    .then(function(roles){    
        var dictOfSkills = {};
        for(let role of roles){
            roleToDisplay = role.area + " " + role.title;
            Object.entries(role.skills).forEach(([skill_area, area_skills]) => {
                for(let area_skill of area_skills){
                    if (area_skill in dictOfSkills) {
                        dictOfSkills[area_skill]["roles"].push(roleToDisplay);
                        dictOfSkills[area_skill]["timeIntervals"].push(role.time);
                    } else {
                        dictOfSkills[area_skill] = {};
                        dictOfSkills[area_skill]["roles"] = [roleToDisplay];
                        dictOfSkills[area_skill]["timeIntervals"] = [role.time];
                        dictOfSkills[area_skill]["skillArea"] = skill_area;
                    }
                }
            });
        }

        for (const [skill, skillAttributes] of Object.entries(dictOfSkills)) {
            createTechnicalSkillCard(skill, skillAttributes);
        }
    });

    fetch("./static/json/intro_details.json")
    .then(function(response){
    return response.json();
    })
    .then(function(introDetails){
        let jsonDataOfLanguages = introDetails["languages"];
        for(let language of jsonDataOfLanguages){
            createLanguageSkillCard(language);
        }
    });

};
