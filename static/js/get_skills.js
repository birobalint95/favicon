fetch("./static/json/role_details.json")
.then(function(response){
   return response.json();
})
.then(function(roles){
    var dictOfSkills = {};

    for(let role of roles){
        roleToDisplay = role.area + " " + role.title;
        for(let skill of role.skills){
            if (skill in dictOfSkills) {
                dictOfSkills[skill].push(roleToDisplay);
            } else {
                dictOfSkills[skill] = [roleToDisplay];
            }
        }
    }

    console.log(dictOfSkills);

});