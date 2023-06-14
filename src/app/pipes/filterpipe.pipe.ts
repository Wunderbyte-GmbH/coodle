import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(items: any[], count: number): any {
    if (!items || !count) {
        return items;
    }
    return items.filter(item => item.membercount == count);
}

}
