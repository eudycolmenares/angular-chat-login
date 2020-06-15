import { Component, OnInit, Input } from '@angular/core';

@Component({
   selector: 'app-avatar',
   templateUrl: './avatar.component.html',
   styles: [
   ]
})

export class AvatarComponent implements OnInit {
   @Input() showBorder: Boolean;

   constructor() {
   }

   ngOnInit(): void {
      console.log('Border::: ', this.showBorder);
   }

}
