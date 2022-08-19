import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  selectedItem = '';
  filter = '';
  filteredItems: { id: number; category: string; item: string }[] = [];
  items = [
    {
      id: 1,
      category: 'animals',
      item: 'Dog',
    },
    {
      id: 2,
      category: 'colors',
      item: 'Green',
    },
    {
      id: 3,
      category: 'fruits',
      item: 'Apple',
    },
    {
      id: 4,
      category: 'fruits',
      item: 'Mango',
    },
    {
      id: 5,
      category: 'colors',
      item: 'Yellow',
    },
    {
      id: 6,
      category: 'animals',
      item: 'Cat',
    },
    {
      id: 7,
      category: 'colors',
      item: 'Blue',
    },
    {
      id: 8,
      category: 'colors',
      item: 'Red',
    },
    {
      id: 9,
      category: 'animals',
      item: 'Cow',
    },
    {
      id: 10,
      category: 'animals',
      item: 'Goat',
    },
    {
      id: 11,
      category: 'colors',
      item: 'Black',
    },
    {
      id: 12,
      category: 'fruits',
      item: 'Banana',
    },
    {
      id: 13,
      category: 'fruits',
      item: 'Cherry',
    },
  ];

  changeFilter(newFilter: string) {
    this.filter = newFilter;
    this.filteredItems = this.items.filter(
      (item) => item.category === this.filter
    );
    this.selectedItem = '';
  }
  handleTextChange(message: string) {
    this.selectedItem = message;
  }

  constructor() {}

  ngOnInit(): void {
    this.filteredItems = this.items;
  }
}
