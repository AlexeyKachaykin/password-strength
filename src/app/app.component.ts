import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  passwordControl = new FormControl('');
  section1Color: string = 'gray';
  section2Color: string = 'gray';
  section3Color: string = 'gray';

  checkPasswordStrength() {
    const password = this.passwordControl.value;

    if (!password || password.length === 0) {
      this.section1Color = this.section2Color = this.section3Color = 'gray';

    } else if (password.length < 8) {
      this.section1Color = this.section2Color = this.section3Color = 'red';

    } else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasDigits = /\d/.test(password);
      const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

      if (hasLetters || hasDigits || hasSymbols) {
        this.section1Color = 'red';
        this.section2Color = this.section3Color = 'gray';

      }

      if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
        this.section1Color = this.section2Color = 'yellow';
        this.section3Color = 'gray';

      }

      if (hasLetters && hasDigits && hasSymbols) {
        this.section1Color = this.section2Color = this.section3Color = 'green';

      }
    }
  }
}