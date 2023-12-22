import {Directive, HostListener} from "@angular/core";

@Directive({
  selector: '[no-open]',
  standalone: true
})
export class NoOpenDirective{

  constructor() {}

  @HostListener("click", ["$event"])
  onClick(event: Event){
    event.preventDefault()
  }
}
