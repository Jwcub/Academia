import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ThemeService } from '../../services/theme.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIcon],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  public themeService = inject(ThemeService);
}