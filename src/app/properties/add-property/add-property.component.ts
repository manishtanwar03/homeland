import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/services/property.model';
import { PropertyService } from 'src/app/services/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  property:Property = new Property(100,'street_name','my_city',10000,'condo','sale',1,1,100);

  constructor(private propertyService:PropertyService, private router:Router) { }

  ngOnInit() {
    
  }

  updateProperties(){
    this.propertyService.addProperty(this.property);
    this.router.navigate(['/dashboard']);
  }
}
