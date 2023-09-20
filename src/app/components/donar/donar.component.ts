import { Component } from '@angular/core';
import { Donation } from 'src/app/model/Donation';

@Component({
  selector: 'app-donar',
  templateUrl: './donar.component.html',
  styleUrls: ['./donar.component.css']
})
export class DonarComponent {
  donation: Donation = {
    mobileNumber: '',
    name: '',
    location: '',
    category: '',
    quantity: 0,
  };

  submitForm() {
    // Handle form submission here, e.g., send data to a backend server.
    console.log(this.donation);
    // Reset the form after submission
    this.donation = {
      mobileNumber: '',
      name: '',
      location: '',
      category: '',
      quantity: 0,
    };
  }

}
