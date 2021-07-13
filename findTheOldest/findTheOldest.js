let findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => {
        let oldestAge = getAge(oldestPerson);
        let currentAge = getAge(currentPerson);
        return oldestAge > currentAge ? oldestPerson : currentPerson;
    })
}

let getAge = function(person) {
    return person.yearOfDeath == null ? new Date().getFullYear() - person.yearOfBirth : person.yearOfDeath - person.yearOfBirth;
}

module.exports = findTheOldest
