import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { CourseModel } from '../models/course.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private http = inject(HttpClient);
  private url: string = "https://matdah.github.io/DT208G---Programmering-i-TypeScript/Moment%205%20-%20Projekt/miun_courses.json";

  // Hämta kurser
  getCourses() : Signal<CourseModel[]> {
    const courses$ = this.http.get<CourseModel[]>(this.url);
    return toSignal(courses$, { initialValue: [] });
  }
}
