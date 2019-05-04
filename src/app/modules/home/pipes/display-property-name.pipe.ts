import { Pipe, PipeTransform } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'displayPropertyName'
})
export class DisplayPropertyNamePipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) { }

  transform(property: any): SafeHtml {
    console.log(property);
    switch (property.displayMode) {
      case 0:
        return this.sanitizer.bypassSecurityTrustHtml(this.displayMode0(property));
      case 1:
        return this.sanitizer.bypassSecurityTrustHtml(this.displayMode1(property));
      case 3:
        return this.sanitizer.bypassSecurityTrustHtml(this.displayMode3(property));
    }
    return property;
  }

  getValue(value){
    return value[1] === 1 ? `<span class="magic-text "><b>${value[0]}<b></span>` 
      : `<span class="text-white"><b>${value[0]}</b></span>`
  }

  displayMode0(property: any) {
    let propertyName = property.name;
    property.values.forEach(value => {
      const newValue = this.getValue(value);
      propertyName = `${propertyName} : ${newValue}`;
    });
    
    return `<div>${propertyName}</div>`;
  }
  displayMode1(property: any) {
    let propertyName = "";
    property.values.forEach(value => {
      const newValue = this.getValue(value);
      propertyName = newValue;
    });
    
    console.log(property);
    propertyName = `${propertyName} ${property.name}`

    return `<span>${propertyName}, </span>`;
  }

  displayMode3(property: any) {
    let propertyName = property.name;
    property.values.forEach((value, index) => {
      const newValue = this.getValue(value);
      propertyName = propertyName.replace(/(%\d)/, newValue);
    });

    return `<div>${propertyName}</div>`;
  }

}
