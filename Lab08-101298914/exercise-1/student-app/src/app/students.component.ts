import { Component } from '@angular/core';

@Component({
  selector: 'students',
  template: `
    <h2>{{ getTitle() }}</h2>
    <p>Current Date: {{ getCurrentDate() }}</p>
  `,
  standalone: false
})
export class StudentsComponent {
  title = "My List of Students";

  getTitle() {
    return this.title;
  }

  getCurrentDate(): string {
    const currentDate = new Date();
    return currentDate.toLocaleDateString();
  }
}