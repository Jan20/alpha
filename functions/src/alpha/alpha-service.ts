import * as request from 'request';
import { Subject } from "rxjs";

export class AlphaService {

    ///////////////
    // Variables //
    ///////////////
    private static instance: AlphaService
    private alpha: JSON

    //////////////
    // Subjects //
    //////////////
    /**
     * 
     * Simple subject that is everytime updated when a new
     * AlphaVantage Call has been performed.
     * 
     */
    public alphaSubject: Subject<JSON> = new Subject<JSON>()

    ///////////////
    // Functions //
    ///////////////
    /**
    *
    * Simple function to access AlphaVantage's API. 
    * The function calls the API and writes all relevant 
    * datapoints into a connected Firestore realtime database
    *
    * @param symbol - a string referring to an arbitrary stock market symbol
    * 
    */
   public async fetchAlpha(symbol: string): Promise<void> {

        const chunks = []
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=full&apikey=6404`

        request.get(url).on('data', response => {
            
            chunks.push(response)

        }).on('end', () => {
        
            let json: string

            try {

                // After all data chunks are present, they are getting
                // concatinated and parsed into a string.
                json = JSON.parse(Buffer.concat(chunks).toString())
                this.setAlpha(json['Time Series (Daily)'])
                
            } catch(e) {
            
                console.log(e);
            
            }

        })
    }

    /**
     * 
     * 
     * 
     * @returns: An instance of an AlphaService
     * 
     */
    public static getInstance(): AlphaService {

        if (typeof this.instance === 'undefined') {

            this.instance = new AlphaService()

        }

        return this.instance

    }

    /////////////
    // Getters //
    /////////////
    /**
     * 
     * Function that is used to return a JSON
     * 
     * 
     */
    public getAlpha(): JSON {

        return this.alpha

    }

    /////////////
    // Setters //
    /////////////
    setAlpha(alpha: JSON): void {

        this.alpha = alpha
        this.alphaSubject.next(alpha)

    }

}