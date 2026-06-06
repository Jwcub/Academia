import { computed, DOCUMENT, effect, inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  // Signal för färgtema
  readonly theme = signal<'light' | 'dark'>(this.getInitialTheme());

  // Uppdatera färgschema i LocalStorage och DOM
  constructor() {
    effect(() => {
      const currentTheme = this.theme();

      // Sätt färgtema för webblatsen
      this.document.documentElement.style.colorScheme = currentTheme;

      // Om webbplatsen visas i webbläsare, spara tema i LocalStorage
      if(this.isBrowser()) {
        localStorage.setItem('Academia-theme', currentTheme)
      }
    });
  }

  // Växla mellan teman
  toggleTheme() {
    this.theme.update(current => current === 'light' ? 'dark': 'light');
  }

  // Kontrollera användarens preferenser
  private getInitialTheme(): 'light' | 'dark' {
    if(!this.isBrowser()) return 'light';

    // Kontrollera om det finns sparat tema
    const savedTheme = localStorage.getItem('Academia-theme');
    if(savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    
    // Om inget sparat tema finns, kontollera systeminställningar
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark').matches;
    return prefersDark ? 'dark' : 'light';
  }

  // Kontroller om webbplatsen visas i webbläsare
  private isBrowser(): boolean {
  return typeof window !== 'undefined';
  }
}
