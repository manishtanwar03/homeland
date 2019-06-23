import { Pipe, PipeTransform } from '@angular/core';
import { Property } from '../property.model';

// import { Property } from '../property.model';

@Pipe({
  name: 'filter'
})
export class PropertyPipe implements PipeTransform {
  
  transform(value:any, filterObject:{'listing_type':'','city':'','offer_type':''}): any {


    let filtered = value.filter((item)=>{
        if( filterObject['listing_type'] == "" || item.getListingType() == filterObject['listing_type'] )
          return item;
    }).filter((item)=>{
      if( filterObject['city'] == "" || item.getCity() == filterObject['city'] )
      return item;
    }).filter((item)=>{
      if( filterObject['offer_type'] == "" || item.getOfferType() == filterObject['offer_type'] )
      return item;
    })
    console.log(filtered);
    return filtered;
  }
}

