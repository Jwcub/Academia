import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Layout/header/header";
import { Mobilenav } from "./Layout/mobilenav/mobilenav";
import { Sidebar} from "./Layout/sidebar/sidebar"
import { AlternativeSidebar } from './Layout/alternative-sidebar/alternative-sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, Mobilenav, Sidebar, AlternativeSidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Academia');

  constructor( public router: Router ) {}
}
