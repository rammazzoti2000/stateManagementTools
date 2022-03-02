import { action, makeAutoObservable } from "mobx";
import car from 'assets/auto.jpg'
import pigeon from 'assets/pigeon.jpg'


class AuctionStore{
    auctions = [
        {
            name:'Masina',
            startPrice:100,
            imgSrc:car,
            owner:'Cineva',
            startDate:'25.02.2022',
            endDate: '31.03.2022',
            bids: [{
                name:'Cristi',
                price:150,
                timeStamp: '28.02.2022'
            }],
        },
        {
            name: 'Porumbel',
            startPrice: 15,
            imgSrc:pigeon,
            owner:'Altcineva',
            startDate:'25.02.2022',
            endDate:'31.03.2022',
            bids:[{
                name: 'Andrei',
                price: 25,
                timeStamp:'28.02.2022'
            }]
        }
    ]
    constructor(){
        makeAutoObservable(this);
    }

    get maxCarPrice(){
        const max = Math.max(...this.auctions[0].bids.map(bid=> bid.price))
        return max
    }

    get maxPigeonPrice(){
       return Math.max(...this.auctions[1].bids.map(bid=>bid.price))
    }

    @action setCarOwner(owner:string){
        this.auctions[0].owner = owner;
    }

    @action setCarEndDate(endDate:string){
        this.auctions[0].endDate=endDate;
    }

    @action setCarNewBid({name, price, date}:{name:string,price:number, date:string}){
        this.auctions[0].bids.push({name,price,timeStamp:date})
    }

    @action setCarMultipleChanges({name, price, date, owner, endDate}:{name:string,price:number, date:string, owner:string, endDate:string}){
        this.setCarEndDate(endDate);
        this.setCarOwner(owner);
        this.setCarNewBid({name, price, date})
    }

    setPigeonOwner(owner:string){
        this.auctions[1].owner = owner;
    }

    setPigeonEndDate(endDate:string){
        this.auctions[1].endDate=endDate;
    }

    setPigeonNewBid({name, price, date}:{name:string,price:number, date:string}){
        this.auctions[1].bids.push({name,price,timeStamp:date})
    }

    setPigeonMultipleChanges({name, price, date, owner, endDate}:{name:string,price:number, date:string, owner:string, endDate:string}){
        this.setPigeonEndDate(endDate);
        this.setPigeonOwner(owner);
        this.setPigeonNewBid({name, price, date})
    }
    
}

export default AuctionStore