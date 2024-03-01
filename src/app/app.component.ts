import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { UserInputFormComponent } from './user-input-form/user-input-form.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgFor, UserCardComponent, UserInputFormComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'application';

  cards: any[] = [];

  onCardAdded(cardData: any) {
    const isDuplicate = this.cards.some(card => 
      card.name === cardData.name &&
      card.age === cardData.age &&
      card.ageUnit === cardData.ageUnit &&
      card.isStudent === cardData.isStudent &&
      card.school === cardData.school
    );

  if (!isDuplicate) {
    this.cards.push(cardData);
  } else {
    alert("This card already exists.");
  }
}}