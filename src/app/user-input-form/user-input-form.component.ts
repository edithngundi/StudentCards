import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input-form',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf],
  templateUrl: './user-input-form.component.html',
  styleUrl: './user-input-form.component.css'
})
export class UserInputFormComponent {
  name: string = '';
  age: string = '';
  ageUnit!: string;
  isStudent: string = 'no';
  school: string = '';

  @Output() cardAdded = new EventEmitter<any>();

  addCard() {
    if (this.name.length > 100) {
      alert('Name must not exceed 100 characters.');
      return;
    }
    
    if (this.isStudent == 'yes' && this.school.length > 200) {
      alert('School must not exceed 200 characters.');
      return;
    }

    const cardData = { name: this.name, age: this.age, ageUnit: this.ageUnit, isStudent: this.isStudent === 'yes', school: this.isStudent === 'yes' ? this.school : '' };
    this.cardAdded.emit(cardData);

    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.age = ''; 
    this.ageUnit = 'years';
    this.isStudent = 'no';
    this.school = '';
  }
}
