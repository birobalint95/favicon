fetch("./static/json/role_details.json")
.then(function(response){
   return response.json();
})
.then(function(roles){
    var dictOfSkills = {};

    for(let role of roles){
        for(let skill of role.skills){
            if (skill in dictOfSkills) {
                dictOfSkills[skill].push(role);
            } else {
                dictOfSkills[skill] = [role];
            }
        }
    }

    console.log(dictOfSkills);

});