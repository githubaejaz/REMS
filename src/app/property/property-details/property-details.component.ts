import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  inputRoutedValue: number;
  constructor (private routevalue: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    //this.inputRoutedValue = Number(this.routevalue.snapshot.params["id"]);
    this.inputRoutedValue = +this.routevalue.snapshot.params["id"];
    this.routevalue.params.subscribe
    (
        params =>
        {
            this.inputRoutedValue = +params["id"];
        }
    );
  }

  onClickNextProperty(mode:number)
  {
    if(mode==1)
    {
      this.inputRoutedValue += 1;
      this.router.navigate(['property-details',this.inputRoutedValue]);
    }
    else
    {
        this.inputRoutedValue -= 1;
        this.router.navigate(['property-details',this.inputRoutedValue]);
    }
  }



}
