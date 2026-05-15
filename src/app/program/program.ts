import { Component, inject } from '@angular/core';
import { SaveToScheduleService } from '../services/save-to-schedule.service';

@Component({
  selector: 'app-program',
  imports: [],
  templateUrl: './program.html',
  styleUrl: './program.css',
})
export class Program {

  private savedToSchedule = inject(SaveToScheduleService);
  savedCourses = this.savedToSchedule.getCourses();

}



