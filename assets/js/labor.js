class Labor {
    constructor(name, specialty) {
        this._name = name;
        this._specialty = specialty;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get specialty() {
        return this._specialty;
    }

    set specialty(value) {
        this._specialty = value;
    }

}