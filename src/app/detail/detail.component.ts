import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ItemService } from '../item.service';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, InputTextareaModule, ButtonModule],
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  itemForm: FormGroup;
  itemId!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private itemService: ItemService
  ) {
    this.itemForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.itemId = +this.route.snapshot.paramMap.get('id')!;
    this.itemService.getItemById(this.itemId).subscribe(item => {
      this.itemForm.patchValue(item);
    });
  }

  onSubmit(): void {
    if (this.itemForm.valid) {
      this.itemService.updateItem(this.itemId, this.itemForm.value).subscribe();
    }
  }
}
