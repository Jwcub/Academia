import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./partials/header/header";
import { Mobilenav } from "./partials/mobilenav/mobilenav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Mobilenav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Academia');
}
