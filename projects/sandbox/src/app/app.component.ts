import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HighlightDirective} from "./highlight.directive";
import {NoOpenDirective} from "./noOpen.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HighlightDirective, NoOpenDirective],
  template: `
    <h1>Découverte des directives d'attributs</h1>

    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, ipsum? Recusandae aliquid voluptas et enim!
      Facilis nihil beatae tempora saepe accusantium deleniti? Odit nobis illo excepturi corporis eligendi sapiente
      dolorem.
    </p>
    <p highlight default-color="red">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, ipsum? Recusandae aliquid voluptas et enim!
      Facilis nihil beatae tempora saepe accusantium deleniti? Odit nobis illo excepturi corporis eligendi sapiente
      dolorem.
    </p>
    <p highlight bg-color="blue">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, ipsum? Recusandae aliquid voluptas et enim!
      Facilis nihil beatae tempora saepe accusantium deleniti? Odit nobis illo excepturi corporis eligendi sapiente
      dolorem.
    </p>
    <a href="https://youtube.com" no-open>Youtube</a>
  `,
  styles: []
})
export class AppComponent {
  title = 'sandbox';
}
