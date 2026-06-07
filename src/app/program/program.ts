import { Component, inject } from '@angular/core';
import { ScheduleService } from '../services/schedule.service';
import { CourseModel } from '../models/course.model';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-program',
  imports: [MatIcon, MatTooltip, RouterLink],
  templateUrl: './program.html',
  styleUrl: './program.css',
})
export class Program {
  // Inläsning av kurser sparade i ramschema
  private scheduleService = inject(ScheduleService);
  savedCourses = this.scheduleService.getCourses();

  // Ta bort sparad kurs
  deleteCourse(course:CourseModel) {
    this.scheduleService.deleteCourse(course);
  }

  // Sammanlagda poäng
  points = this.scheduleService.pointsTotal;
}



