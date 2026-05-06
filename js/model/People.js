export class People {
    constructor() {
        this._idpeople = 0;
        this._name = "";
        this._phone = "";
    }
    get idpeople() {
        return this._idpeople;
    }
    set idpeople(value) {
        this._idpeople = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get phone() {
        return this._phone;
    }
    set phone(value) {
        this._phone = value;
    }
    static fromRaw(obj) {
        let people = new People();
        if (obj.idpeople)
            people._idpeople = obj.idpeople;
        if (obj.name)
            people._name = obj.name;
        if (obj.phone)
            people._phone = obj.phone;
        return people;
    }
}
//# sourceMappingURL=People.js.map