import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-age-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './age-form.component.html',
  styleUrl: './age-form.component.css',
})
export class AgeFormComponent {
  dateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dateForm = fb.group({
      day: new FormControl(1),
      month: new FormControl(1),
      year: new FormControl(1900),
    });
  }
}
