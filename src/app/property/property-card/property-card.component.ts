import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../Iproperty.Interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit{
  @Input() propertydetails : IProperty;

  constructor(){}

  ngOnInit() : void
  {
    console.log('on init property card');
  }
}
