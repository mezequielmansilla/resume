import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent implements OnInit {
  @Input()
  name: string;
  @Input()
  faName: string;

  constructor() { }

  ngOnInit() {
  }

}
