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
const functions = require("firebase-functions");
const express = require("express");
const alpha_service_1 = require("./alpha/alpha-service");
///////////////
// Functions //
///////////////
/**
 *
 * Defines a new express application
 *
 */
const application = express();
/////////////////////
// Cloud Functions //
/////////////////////
/**
 *
 * Whenever the "api" URL endpoint is called,
 * the request gets forwarded to an express
 * application.
 *
 */
exports.api = functions.https.onRequest((req, res) => {
    return application(req, res);
});
/**
 *
 * Async Middleware intended to serve as callback function for
 * a given request.
 *
 * @param callBackFunction
 *
 */
const asyncMiddleware = callBackFunction => (req, res, next) => {
    Promise.resolve(callBackFunction(req, res, next)).catch(next);
};
/**
 *
 *
 *
 */
application.post('/alpha/:symbol', asyncMiddleware((req, res, next) => __awaiter(this, void 0, void 0, function* () {
    yield alpha_service_1.AlphaService.getInstance().fetchAlpha(req.params['symbol']);
    let responseHasNotBeenSentYet = true;
    yield alpha_service_1.AlphaService.getInstance().alphaSubject.subscribe(json => {
        if (responseHasNotBeenSentYet) {
            responseHasNotBeenSentYet = false;
            res.status(200).send(json);
        }
    });
})));
//# sourceMappingURL=index.js.map