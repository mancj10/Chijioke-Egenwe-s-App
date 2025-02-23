function filterPersons(persons, personType, criteria) {
    return persons.filter(function (person) {
        if (person.type !== personType)
            return false;
        return Object.entries(criteria).every(function (_a) {
            var key = _a[0], value = _a[1];
            return person[key] === value;
        });
    });
}
var persons = [
    { type: 'user', name: 'Chijioke', age: 32 },
    { type: 'user', name: 'Michael', age: 28 },
    { type: 'admin', role: 'cloud Engineer', permissions: ['read', 'code'] },
    { type: 'admin', role: 'Product Manager', permissions: ['read'] },
];
var usersFiltered = filterPersons(persons, 'user', { age:32  }); // User[]
var adminsFiltered = filterPersons(persons, 'admin', { role: 'Product Manager' }); // Admin[]
console.log(usersFiltered);
console.log(adminsFiltered);