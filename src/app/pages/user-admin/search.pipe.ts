import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    console.log("searchText"+searchText);
    return items.filter( it => {
      console.log('nomUtilisateur: ', it.nomUtilisateur.toLocaleLowerCase().indexOf(searchText));
      return  it.nomUtilisateur.toLocaleLowerCase().indexOf(searchText) !== -1;
    });
   }

}
