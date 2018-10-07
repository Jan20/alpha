// import { fb } from '../config/firebase'
// import * as request from 'request'
// import { MarketService } from '../market/market-service'
// import { Market } from '../market/market-model'
// import { Stock } from './stock-model';
// import { Subject } from 'rxjs';

// export class StockService {

//     ///////////////
//     // Variables //
//     ///////////////
//     public static instance: StockService
//     private stocks: Stock[]

//     //////////////
//     // Subjects //
//     //////////////
//     public stocksSubject: Subject<Stock[]> = new Subject<Stock[]>()

// 	///////////////
// 	// Functions //
//     ///////////////
//     public fetchStocks(marketId: string): void {
            
//         let chunks = []
//         let stocks: Stock[] = []

//         request.get(`https://us-central1-next-001.cloudfunctions.net/api/markets/${marketId}`).on('data', response => {
                
//             chunks.push(response)

//         }).on('end', () => {

//             let buffer = Buffer.concat(chunks)
//             const fStocks = JSON.parse(buffer.toString())
            
//             for(let i = 0; i < fStocks.length; i++) {
    
//                 stocks.push(new Stock(fStocks[i]['symbol'], fStocks[i]['name'], fStocks[i]['market_id']))
    
//             }

//             this.setStocks(stocks)

//         })            
                
//     }

//     /////////////
//     // Getters //
//     /////////////
//     public static getInstance(): StockService {

//         if (typeof this.instance === 'undefined') {

//             this.instance = new StockService()

//         }

//         return this.instance

//     }

//     public getStocks(): Stock[] {

//         return this.stocks

//     }

//     /////////////
//     // Setters //
//     /////////////
//     public setStocks(stocks: Stock[]): void {

//         this.stocks = stocks
//         this.stocksSubject.next(stocks)

//     }
  


// }