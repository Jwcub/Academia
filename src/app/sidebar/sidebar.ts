import { Component, inject } from '@angular/core';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  private scheduleService = inject(ScheduleService);
  savedCourses = this.scheduleService.getCourses();

  points = this.scheduleService.pointsTotal
}
