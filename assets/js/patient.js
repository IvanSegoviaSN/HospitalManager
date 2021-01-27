class Patient {
    constructor(name, hospital, labor) {
        this._name = name;
        this._hospital = hospital;
        this._labor = labor;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get hospital() {
        return this._hospital;
    }

    set hospital(value) {
        this._hospital = value;
    }

    get labor() {
        return this._labor;
    }

    set labor(value) {
        this._labor = value;
    }
}