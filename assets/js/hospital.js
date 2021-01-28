class Hospital {
    constructor(name, location, attendant) {
        this._name = name;
        this._location = location;
        this._attendant = attendant;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get location() {
        return this._location;
    }

    set location(value) {
        this._location = value;
    }

    get attendant() {
        return this._attendant;
    }

    set attendant(value) {
        this._attendant = value;
    }
}