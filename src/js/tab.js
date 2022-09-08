export default class Tab{
    _name;
    _title;
    _view;

    constructor(name, title, view){
        this.name = name;
        this.title = title;
        this.view = view;
    }
    
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get view() {
        return this._view;
    }
    set view(value) {
        this._view = value;
    }
}