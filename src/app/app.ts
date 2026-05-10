import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header";
import { Mobilenav } from "./mobilenav/mobilenav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, Mobilenav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Academia');
}
