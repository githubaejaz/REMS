import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProperty } from '../property/Iproperty.Interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private httpCall: HttpClient) { }

  getAllProperties1()
  {
    return this.httpCall.get('data/properties.json');
  }
  getAllProperties(SellRent : Number) :Observable<IProperty[]>
  {
    return this.httpCall.get('data/properties.json').pipe(
      map(data => {
        const jsonData = JSON.stringify(data);
        const propertiesArray: Array<IProperty> = JSON.parse(jsonData);
        const filterPropertiesArray: Array<IProperty> = [];
        for(const id in propertiesArray)
        {
          if(propertiesArray.hasOwnProperty(id) && propertiesArray[id].SellRent == SellRent)
            filterPropertiesArray.push(propertiesArray[id])
        }
        return filterPropertiesArray;
      })
    );



    //  return this.httpCall.get('data/properties.json').pipe(
    //     map(data=>
    //       {
    //           const propertydataArray: Array<IProperty> = [];

    //           for (const Id in data) {
    //             console.log(data);
    //             console.log(Id);
    //             if(data.hasOwnProperty(Id))
    //             {
    //               propertydataArray.push(data[Id as keyof object]);
    //             }
    //           }
    //           return propertydataArray;
    //       }
    //     )
    //   );
  }
}
