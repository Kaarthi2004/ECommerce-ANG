import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ItemService } from '../item.service';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, InputTextareaModule, ButtonModule],
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  addItemForm: FormGroup;

  constructor(private fb: FormBuilder, private itemService: ItemService) {
    this.addItemForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.addItemForm.valid) {
      this.itemService.addItem(this.addItemForm.value).subscribe();
    }
  }
}
