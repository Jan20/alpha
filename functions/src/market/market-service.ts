// import { Market } from './market-model'
// import * as request from 'request'
// import { Subject } from 'rxjs';

// export class MarketService {

//     ///////////////
//     // Variables //
//     ///////////////
//     private static instance: MarketService
//     private markets: Market[]

//     //////////////
//     // Subjects //
//     //////////////
//     public marketsSubject: Subject<Market[]> = new Subject<Market[]>()

// 	///////////////
// 	// Functions //
// 	///////////////
// 	public async fetchMarkets(): Promise<any> {

//         let chunks = []
//         let markets: Market[] = []

//         await request.get('https://us-central1-next-001.cloudfunctions.net/api/markets').on('data', response => {
            
//             chunks.push(response)

//         }).on('end', () => {

//             let buffer = Buffer.concat(chunks)
//             const fetchedMarkets = JSON.parse(buffer.toString())
            
//             for(let i = 0; i < fetchedMarkets.length; i++) {
    
//                 markets.push(new Market(fetchedMarkets[i]['market_id'], fetchedMarkets[i]['category'], fetchedMarkets[i]['name']))
    
//             }

//             this.setMarkets(markets)

//         })            
            
//     }

//     /////////////
//     // Getters //
//     /////////////
//     public static getInstance(): MarketService {

//         if (typeof this.instance === 'undefined') {

//             this.instance = new MarketService()

//         }

//         return this.instance

//     }

//     public getMarkets(): Market[] {

//         return this.markets

//     }

//     /////////////
//     // Setters //
//     /////////////
//     public setMarkets(markets: Market[]) {

//         this.markets = markets
//         this.marketsSubject.next(markets)

//     }

// }