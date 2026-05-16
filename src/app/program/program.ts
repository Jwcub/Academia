import { Component, inject } from '@angular/core';
import { ScheduleService } from '../services/schedule.service';
import { CourseModel } from '../models/course.model';

@Component({
  selector: 'app-program',
  imports: [],
  templateUrl: './program.html',
  styleUrl: './program.css',
})
export class Program {

  private scheduleService = inject(ScheduleService);
  savedCourses = this.scheduleService.getCourses();

  deleteCourse(course:CourseModel) {
    this.scheduleService.deleteCourse(course);
  }

  points = this.scheduleService.pointsTotal;
}



