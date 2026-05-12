import { Component, inject, signal } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})

export class Courses {
  courseService = inject(CourseService);
  courses = this.courseService.getCourses();

  searchQuery = signal<string>("");
}

