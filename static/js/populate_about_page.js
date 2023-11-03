import { createSkillCards } from "./create_skill_cards.js";
import { createCertificationCards } from "./create_certification_cards.js";
import { createHobbyCards } from "./create_hobby_cards.js";

$(document).ready(function(){
    createSkillCards();
    createCertificationCards();
    createHobbyCards();
});
