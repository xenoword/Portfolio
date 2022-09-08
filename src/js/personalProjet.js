export default class PersonalProject{
//#region fields
    _name = 'test';
    _descriptionArray = [];
    _link = '';

    _id = '';
    _height = '';
//#endregion

//#region constructors
    constructor(name, description = [], link, height = undefined)
    {
        this.name = name;
        this.descriptionArray = (typeof(description) == "string") ? [description] : description;
        this.link = link;

        this.id = "git_" + name.toLowerCase().replace(" ","-");
        this.height = height;
    }
//#endregion

//#region Accessors
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    get descriptionArray() {
        return this._descriptionArray;
    }
    set descriptionArray(value) {
        this._descriptionArray = value;
    }

    get link() {
        return this._link;
    }
    set link(value) {
        this._link = value;
    }

    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }

    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
//#endregion
}