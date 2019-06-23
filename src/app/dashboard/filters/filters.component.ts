import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  filterForm:FormGroup;

  constructor(public propertyService:PropertyService) { }

  ngOnInit() {
    this.filterForm = new FormGroup({
      'listing_type' : new FormControl(''),
      'city' : new FormControl(''),
      'offer_type' : new FormControl('')
    });
  }

  onSearch(){
    this.propertyService.filterObject.next(this.filterForm.value);
  }

}
