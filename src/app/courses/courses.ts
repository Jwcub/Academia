import { Component, computed, inject, signal } from '@angular/core';
import { CourseService } from '../services/course.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { CourseModel } from '../models/course.model';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})

export class Courses {
  courseService = inject(CourseService);
  courses = this.courseService.getCourses();
}

