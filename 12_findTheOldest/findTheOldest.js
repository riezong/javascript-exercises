const findTheOldest = function(people) {

    const age = [];
    const date = new Date();
    let currentYear = date.getFullYear();
    let oldest = 0;
  
    for (const person of people) {
        if (person.yearOfDeath > 0) {
        age.push(person.yearOfDeath - person.yearOfBirth);
        } else {
        age.push(currentYear - person.yearOfBirth);
        }
    }

    for (let i = 0; i < age.length; i++) {
        if (age[i] > oldest) {
        oldest = age[i];
        }
    }
    
    let index = age.indexOf(oldest);
    
    return people[index];

};

// Do not edit below this line
module.exports = findTheOldest;
