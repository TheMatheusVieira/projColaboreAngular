import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="../src/telaPerfil/telaPerfil.html">
    Learn more about Angular
</a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
