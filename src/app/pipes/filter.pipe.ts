import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(issues: any[], searchNumber: string): any[] {
    if (!issues) {
      return [];
    }
    if (!searchNumber) {
      return issues;
    }

    return issues.filter(is => {
      console.log('PIPE: ', is.number.toString() === searchNumber);
      return is.number.toString().includes(searchNumber);
    });
  }

}
