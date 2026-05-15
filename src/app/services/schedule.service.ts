import { Injectable, signal, Signal } from '@angular/core';
import { CourseModel } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  private storageKey: string = "saved_courses";

  savedCourses = signal<CourseModel[]>(this.loadFromStorage());
  errorMessage = signal<string | null>(null);

  private loadFromStorage(): CourseModel[] {
    const storedCourses = localStorage.getItem(this.storageKey);
    return storedCourses ? JSON.parse(storedCourses) : [];
  }

  // Lägg till kurs i ramschema
  addCourse(newCourse: CourseModel): void {
    const currentCourses = this.savedCourses();
    const containsCourse = currentCourses.some(course => course.courseCode === newCourse.courseCode);

    //Kontrollera att kursen inte finns i ramschemat
    if(containsCourse) {
      this.errorMessage.set("Kursen finns redan i ditt ramschema");
      return
    }

    const updatedList = [...currentCourses, newCourse];
    localStorage.setItem(this.storageKey, JSON.stringify(updatedList));
    this.savedCourses.set(updatedList);
  }

  // Kurser i ramschema
  getCourses() {
    return this.savedCourses;
  }

  // Radera kurs i ramschema
  deleteCourse(course:CourseModel) {
    let storedCourses: CourseModel[] = this.savedCourses();
    const courseIndex: number = storedCourses.findIndex(storedCourse => storedCourse.courseCode === course.courseCode);
    storedCourses.splice(courseIndex, 1)
    localStorage.setItem(this.storageKey, JSON.stringify(storedCourses));
  }
}
