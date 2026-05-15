import { Injectable } from '@angular/core';
import { CourseModel } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class SaveToScheduleService {

  private data: CourseModel[] = [];

  addCourse(course: CourseModel): void {
    this.data.push(course);
    localStorage.setItem("saved_courses", JSON.stringify(this.data));
  }

}
