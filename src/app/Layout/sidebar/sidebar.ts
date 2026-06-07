import { Component, inject } from '@angular/core';
import { ScheduleService } from '../../services/schedule.service';
import { RouterLink } from '@angular/router';
import { AlternativeSidebar } from '../alternative-sidebar/alternative-sidebar';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, AlternativeSidebar],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  // Inläsning av kurser i ramschema
  private scheduleService = inject(ScheduleService);
  savedCourses = this.scheduleService.getCourses();

  points = this.scheduleService.pointsTotal
}
