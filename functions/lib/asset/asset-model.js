"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Asset {
    //////////////////
    // Constructors //
    //////////////////
    constructor(assetId, name, symbol, market, short_term_prediction, marketId, longTermSharpeRatio, market_id) {
        this.assetId = assetId;
        this.name = name;
        this.symbol = symbol;
        this.market = market;
        this.short_term_prediction = short_term_prediction;
        this.marketId = marketId;
        this.longTermSharpeRatio = longTermSharpeRatio;
        this.market_id = market_id;
    }
    /////////////
    // Getters //
    /////////////
    getAssetId() {
        return this.assetId;
    }
    getName() {
        return this.name;
    }
    getSymbol() {
        return this.symbol;
    }
    getMarketId() {
        return this.marketId;
    }
    getMarket() {
        return this.market;
    }
    getSeries() {
        return this.series;
    }
    getShortTermPrediction() {
        return this.short_term_prediction;
    }
    getLongTermSharpeRatio() {
        return this.longTermSharpeRatio;
    }
    /////////////
    // Setters //
    /////////////
    setAssetId(assetId) {
        this.assetId = assetId;
    }
    setName(name) {
        this.name = name;
    }
    setSymbol(symbol) {
        this.symbol = symbol;
    }
    setMarketId(marketId) {
        this.marketId = marketId;
    }
    setMarket(market) {
        this.market = market;
    }
    setSeries(series) {
        this.series = series;
    }
    setShortTermPrediction(short_term_prediction) {
        this.short_term_prediction = short_term_prediction;
    }
    setLongTermSharpeRatio(longTermSharpeRatio) {
        this.longTermSharpeRatio = longTermSharpeRatio;
    }
}
exports.Asset = Asset;
//# sourceMappingURL=asset-model.js.map