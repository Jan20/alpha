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
const request = require("request");
const rxjs_1 = require("rxjs");
class AlphaService {
    constructor() {
        //////////////
        // Subjects //
        //////////////
        /**
         *
         * Simple subject that is everytime updated when a new
         * AlphaVantage Call has been performed.
         *
         */
        this.alphaSubject = new rxjs_1.Subject();
    }
    ///////////////
    // Functions //
    ///////////////
    /**
    *
    * Simple function to access the Alpha Vantage API. Function makes a call and write all relevant datapoints back
    * into a Firestore realtime database
    *
    * @param symbol - a string referring to an arbitrary stock market symbol
    *
    */
    fetchAlpha(symbol) {
        return __awaiter(this, void 0, void 0, function* () {
            const chunks = [];
            const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=full&apikey=6404`;
            request.get(url).on('data', response => {
                chunks.push(response);
            }).on('end', () => {
                let json;
                try {
                    // After all data chunks are present, they are getting
                    // concatinated and parsed into a string.
                    json = JSON.parse(Buffer.concat(chunks).toString());
                    this.setAlpha(json['Time Series (Daily)']);
                }
                catch (e) {
                    console.log(e);
                }
            });
        });
    }
    /////////////
    // Getters //
    /////////////
    /**
     *
     *
     *
     * @returns - an instance of an AlphaService
     *
     */
    static getInstance() {
        if (typeof this.instance === 'undefined') {
            this.instance = new AlphaService();
        }
        return this.instance;
    }
    /**
     *
     * Function that is used to return a JSON
     *
     *
     */
    getAlpha() {
        return this.alpha;
    }
    /////////////
    // Setters //
    /////////////
    setAlpha(alpha) {
        this.alpha = alpha;
        this.alphaSubject.next(alpha);
    }
}
exports.AlphaService = AlphaService;
//# sourceMappingURL=alpha-service.js.map