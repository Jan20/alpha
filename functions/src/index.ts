import * as functions from 'firebase-functions'
import * as express from 'express'
import { AlphaService } from './alpha/alpha-service'



///////////////
// Functions //
///////////////
/**
 * 
 * Defines a new express application
 * 
 */
const application = express()

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
export const api = functions.https.onRequest( (req, res) => {
	
	return application(req, res)

})

/**
 * 
 * Async Middleware intended to serve as callback function for
 * a given request.
 * 
 * @param callBackFunction 
 * 
 */
const asyncMiddleware = callBackFunction => (req, res, next) => {

	Promise.resolve(callBackFunction(req, res, next)).catch(next)

}

/**
 * 
 * 
 * 
 */
application.post('/alpha/:symbol', asyncMiddleware(async (req, res, next) => {
	
	await AlphaService.getInstance().fetchAlpha(req.params['symbol'])

	let responseHasNotBeenSentYet = true

	await AlphaService.getInstance().alphaSubject.subscribe(json => {
	
		if (responseHasNotBeenSentYet) {

			responseHasNotBeenSentYet = false
			res.status(200).send(json)
		
		}
		
	});

}))
