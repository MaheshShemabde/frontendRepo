import { Component } from '@angular/core';
import { Router ,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectLoginSignUp';
  shouldDisplayNavbar: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.shouldDisplayNavbar = event.url === '/home';
      }
    });
  }
}
