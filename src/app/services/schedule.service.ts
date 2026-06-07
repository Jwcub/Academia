import { computed, Injectable, signal, Signal } from '@angular/core';
import { CourseModel } from '../models/course.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  private storageKey: string = "saved_courses";

  // Sparade kurser
  savedCourses = signal<CourseModel[]>(this.loadFromStorage());
  
  // Beräkna sammanlagda poäng för sparade kurser
  public pointsTotal = computed(() => {
    return this.savedCourses().reduce((sum, course) => sum + course.points, 0);
  })

  // Hämta sparade kurser från LocalStorage
  private loadFromStorage(): CourseModel[] {
    const storedCourses = localStorage.getItem(this.storageKey);

    if(storedCourses) {
      return JSON.parse(storedCourses);
    } else {
      return [];
    }
  }

  // Lägg till kurs i ramschema
  addCourse(newCourse: CourseModel): void {
    const currentCourses = this.savedCourses();
    const containsCourse = currentCourses.some(course => course.courseCode === newCourse.courseCode);

    //Kontrollera att kursen inte finns i ramschemat
    if(containsCourse) {
      throw new Error('Kursen finns redan i ditt ramschema');
    }

    // Kontoller att den sammanlagda kurssumman inte översiger 45HP
    if((this.pointsTotal() + newCourse.points)> 45) {
      throw new Error('Du kan lägga till max 45HP i ditt ramschema');
    }

    const updatedList = [...currentCourses, newCourse];
    localStorage.setItem(this.storageKey, JSON.stringify(updatedList));
    this.savedCourses.set(updatedList);
  }

  // Kurser i ramschema
  getCourses() {
    return this.savedCourses;
  }

  // Radera kurser från ramschema
  deleteCourse(course: CourseModel):void {
    this.savedCourses.update(courses => courses.filter(storedCourse => storedCourse.courseCode !== course.courseCode));
    localStorage.setItem(this.storageKey, JSON.stringify(this.savedCourses()));
  }
}
