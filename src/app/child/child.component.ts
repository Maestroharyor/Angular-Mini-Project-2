import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input()
  items: { id: number; category: string; item: string }[] = [];

  @Output()
  newItemEmmiter = new EventEmitter();

  handleClick(e: any) {
    this.newItemEmmiter.emit(e.target.textContent);
  }

  constructor() {}

  ngOnInit(): void {}
}
