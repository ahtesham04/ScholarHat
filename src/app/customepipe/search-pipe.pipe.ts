import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    return this.searchItems(items, searchText.toLowerCase());
  }

  private searchItems(items:any[], searchText:string){
    let results:any = [];
    items.forEach(el =>{
      if(el.title.toLowerCase().includes(searchText)){
        results.push(el);
      }
    });
    return results;
  }

}
