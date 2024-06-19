import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
          {id: 1, name:"Шалаш"},
          {id: 2, name:"Пентхаус"},
          {id: 3, name:"Дача"}


        ]
        this._brands = [
          {id: 1, name:'ООО"Антоновские дома"'},
          {id: 2, name:"ИП Калыванов.М.Ю"},
        ]
        this._devices = [
          {id: 1, name: "A-Frame в глухом лесу", price: 14000, ratng: 4, img:'0731a54a-3640-402c-a35d-9bb26b0d434d.jpg'},
          
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type

    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand

    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}