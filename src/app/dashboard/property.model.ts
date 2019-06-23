export class Property{
    public _id : number;
    public house_no : number;
    public street : string;
    public city : string;
    public price:number;
    public home_type:string;
    public offer_type:string;
    public beds:number;
    public baths:number;
    public area:number; 

    constructor(id:number,house_no:number,street:string,
        city:string,price:number,home_type:string,offer_type:string,
        beds:number,baths:number,area:number){ 
            this._id = id;
            this.house_no = house_no;
            this.street = street;
            this.city = city;
            this.price = price;
            this.home_type = home_type;
            this.offer_type = offer_type;
            this.beds = beds;
            this.baths = baths;
            this.area = area;
    }

    getListingType(){
        return this.home_type;
    }
    getOfferType(){
        return this.offer_type;
    }
    getCity(){
        return this.city;
    }
}