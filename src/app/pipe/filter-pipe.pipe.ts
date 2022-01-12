import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(values: any[], search: string) {
    if (!values) {
      return [];
    }
    if (!search) {
      return values;
    }

    search = search.toLocaleLowerCase();
    return values.filter(it => {
      return it.toLocaleLowerCase().includes(search);
    });
  }

}
