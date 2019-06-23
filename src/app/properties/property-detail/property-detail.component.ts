import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../services/property.service';
import { Property } from '../../services/property.model';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  property:Property;
  
  constructor( public route:ActivatedRoute, public propertyService:PropertyService ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
          let id = params['id'];
          this.property = this.propertyService.getPropertyDetails(id);
      } 
    );
  }

}
