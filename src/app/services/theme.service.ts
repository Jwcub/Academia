import { DOCUMENT, effect, inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  readonly theme = signal<'light' | 'dark'>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const currentTheme = this.theme();

      this.document.documentElement.style.colorScheme = currentTheme;

      if(typeof window !== 'undefined') {
        try {
          localStorage.setItem('Academia-theme', currentTheme); 
        } catch(err) {
          console.log("Kunde inte spara tema");
        }
      }
    })
  }

  private getInitialTheme(): 'light' | 'dark' {
    if (typeof window === 'undefined') return 'light';

    try {
      const savedTheme = localStorage.getItem('Academia-theme') as 'light' | 'dark';
      if(savedTheme) return savedTheme;
    } catch(err){
      return 'light';
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark').matches; return prefersDark? 'dark' : 'light';
  }

  toggleTheme() {
    this.theme.update((current) => (current === 'light' ? 'dark' : 'light'))
  }
}
