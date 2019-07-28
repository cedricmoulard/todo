import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <p>
      {{ title }}
    </p>
  `,
  styles: []
})
export class HelloComponent {

  title = 'Hello world !!';

}
