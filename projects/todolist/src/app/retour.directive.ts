import {Directive, HostBinding, HostListener, Input} from '@angular/core';
import {Router, UrlTree} from "@angular/router";

@Directive({
  selector: '[redirect]',
  standalone: true
})
export class RetourDirective {

  @Input('redirect-url')
  url : string = ""


  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  @HostListener('click')
  onClick() {
    this.router.navigateByUrl(this.url).then(r => console.log(r))
  }

}
