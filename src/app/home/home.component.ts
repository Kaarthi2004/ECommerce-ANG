import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, TableModule, RouterModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
    });
  }
}
