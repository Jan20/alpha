"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Entry {
    //////////////////
    // Constructors //
    //////////////////
    constructor(name, symbol, value, date) {
        this.name = name;
        this.symbol = symbol;
        this.value = value;
        this.date = date;
    }
    /////////////
    // Getters //
    /////////////
    getName() {
        return this.name;
    }
    getSymbol() {
        return this.symbol;
    }
    getValue() {
        return this.value;
    }
    getDate() {
        return this.date;
    }
    /////////////
    // Setters //
    /////////////
    setName(name) {
        this.name = name;
    }
    setSymbol(symbol) {
        this.symbol = symbol;
    }
    setValue(value) {
        this.value = value;
    }
    setDate(date) {
        this.date = date;
    }
}
exports.Entry = Entry;
//# sourceMappingURL=entry.js.map