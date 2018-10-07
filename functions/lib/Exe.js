"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("./user/user-service");
const market_service_1 = require("./market/market-service");
const asset_service_1 = require("./asset/asset-service");
class Exe {
    constructor() {
        ///////////////
        // Variables //
        ///////////////
        this.userId = 'pej3fiZSJTf4tNHfNHCKHxa7eJf2';
        this.userService = new user_service_1.UserService();
        this.marketService = new market_service_1.MarketService();
        this.assetService = new asset_service_1.AssetService();
    }
    ///////////////
    // Functions //
    ///////////////
    callAlphaVantage() {
        return __awaiter(this, void 0, void 0, function* () {
            this.markets = [];
            yield this.markets.forEach(market => this.assetService.fetchAssetsFromAlphaVantage(this.user.userId, market.marketId));
        });
    }
}
exports.Exe = Exe;
//# sourceMappingURL=Exe.js.map