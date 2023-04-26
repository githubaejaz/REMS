import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../Iproperty.Interface';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{
  SellRent = 1;
  constructor(private route : ActivatedRoute, private housingService: HousingService){}
  properties: Array<IProperty>;


  ngOnInit(): void {
    if(this.route.snapshot.url.toString().includes("rent"))
    {
      this.SellRent = 2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe
    (
      data => {
        this.properties = data;
        console.log(data);
        console.log(this.route.snapshot.url.toString());
      }
    )
    // this.housingService.getAllProperties().subscribe
    // (
    //   data =>
    //   {
    //     console.log(data);
    //     this.properties = data;
    //   },
    //   error =>
    //   {
    //     console.log(error);
    //   }
    // )
  }
}
