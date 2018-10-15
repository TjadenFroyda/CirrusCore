import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class StakingInfo {
    constructor(public hotWalletBalance: number, 
                public coldWalletBalance: number,
                public hotWalletAmount: number,
                public coldWalletAmount: number) {}
}

export class StakingHistoryItem {
    constructor(public status: string, public side: string, public amount: string, public dateTime: string, public wallet: string) {}
}

export abstract class StakingServiceBase {
    GetInfo(walletName: string): Observable<StakingInfo> { return Observable.empty(); }
    GetHistory(walletName: string): Observable<StakingHistoryItem[]> { return Observable.empty(); }
    GetAddress(walletName: string): Observable<string> { return Observable.empty(); }
}

@Injectable()
export class FakeStakingService implements StakingServiceBase {
    
    GetInfo(walletName: string): Observable<StakingInfo> { 
        return Observable.of<StakingInfo>(new StakingInfo(88025, 91223, 4000, 28765));
    }

    GetHistory(walletName: string): Observable<StakingHistoryItem[]> {
        return Observable.of<StakingHistoryItem[]>([
            new StakingHistoryItem('warning', 'hot', '+1.0000000', '26/11/2017 15:31', 'Breeze2'),
            new StakingHistoryItem('success', 'hot', '+1.0000000', '26/11/2017 15:31', 'Breeze2'),
            new StakingHistoryItem('success', 'cold', '-1.0037993', '26/11/2017 15:31', 'Breeze2')
        ]);
    }

    GetAddress(walletName: string): Observable<string> {
        return Observable.of('ScCHt2Mug856o1E6gck6VFriXYnRYBD8NE');
    }
}
