import { Component, OnInit, ViewChild } from '@angular/core';
import { Property } from '../../services/property.model';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  properties:Property[];
  filterObject:{}={'listing_type':'','city':'','offer_type':''};
  constructor(public propertyService:PropertyService) { }

  ngOnInit() {
    this.properties = this.propertyService.getProperties();
    this.propertyService.filterObject.subscribe(
      (filterData) => { 
        this.filterObject=filterData;
      }
    );
  }

}
