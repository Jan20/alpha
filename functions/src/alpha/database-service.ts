import { AngularFirestore } from '@angular/fire/firestore';
import { Asset } from '../asset/asset-model';

export class DatabaseService {

    //////////////////
    // Constructors //
    //////////////////
    private constructor(

        private angularFirestore: AngularFirestore,

    ) {

        
    }

    ////////////////////
    // Database Calls //
    ////////////////////
    public async addAsset(market_id: string, name: string, symbol: string): Promise<void> {
  
        const asset: any = { name: name, symbol: symbol, market_id: market_id}
        this.angularFirestore.collection<Asset>(`markets/${market_id}/assets`).doc(symbol).set(asset)
    
      }
      


}