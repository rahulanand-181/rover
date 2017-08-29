import { Component, HostBinding } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'footer-cmp',
    templateUrl: 'footer.component.html'
})

export class FooterComponent{
    test : Date = new Date();
}
