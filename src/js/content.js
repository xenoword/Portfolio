export default class Content{
    _name = '';
    _tabArray = [];
    _isProject = false;
    _height = undefined;
    
    constructor(name, tabArray, isProject = false, height = undefined){
        this.name = name;
        this.tabArray = tabArray;
        this.isProject = isProject ?? false;
        this.height = height;
    }
    
    get name() {
        return this._name + '_content';
    }
    set name(value) {
        this._name = value;
    }
    get tabArray() {
        return this._tabArray;
    }
    set tabArray(value) {
        this._tabArray = value;
    }
    get isProject() {
        return this._isProject;
    }
    set isProject(value) {
        this._isProject = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
}