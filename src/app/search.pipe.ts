import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchContact'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      let rVal = (val.name.toLocaleLowerCase().includes(args)) || (val.emailId.toLocaleLowerCase().includes(args) || 
      (val.mobile.toLocaleLowerCase().includes(args)) || (val.companyBasicId.toString().toLocaleLowerCase().includes(args)
      ));
      return rVal;
    })

  }

}
