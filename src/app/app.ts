import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header";
import { Mobilenav } from "./mobilenav/mobilenav";
import { Sidebar } from "./sidebar/sidebar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, Mobilenav, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Academia');

  constructor( public router: Router ) {}
}
