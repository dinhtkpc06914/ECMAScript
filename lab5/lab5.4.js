var person = {
    _firstName: "Đình",
    _lastName: "Trần",
    
    set lastName(lastName) {
        this._lastName = lastName;
    },

    set firstName(firstName) {
        this._firstName = firstName;
    },

    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
};

person.lastName = 'Kungfu';
person.firstName = 'Panda';
console.log(person.fullName);
