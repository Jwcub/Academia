import { Component, computed, inject, signal } from '@angular/core';
import { CourseService } from '../services/course.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CourseModel } from '../models/course.model';
import { ScheduleService } from '../services/schedule.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-courses',
  imports: [MatPaginatorModule, MatSnackBarModule, MatIcon, MatTooltip],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})

export class Courses {
  private courseService = inject(CourseService);
  allCourses = this.courseService.getCourses();

  // Lista med ämnen
  subjectsList = computed(() => {
    const uniqueSubjects = [...new Set(this.allCourses().map(course => course.subject))];
    uniqueSubjects.sort();
    return uniqueSubjects
  });

  // Signaler
  selectedSubject = signal<string>("");
  searchQuery = signal<string>("");

  sortBy = signal<string>("");
  sortAscending = signal<boolean>(true);

  errorMessage = signal("");

  // Välj ämne att sortera på
  changeSubject(event: Event) {
    const element = event.target as HTMLSelectElement;
    this.selectedSubject.set(element.value);
  }

  // Filtrerade och sorterade kurser
  filteredCourses = computed(() => {
    let courses = [...this.allCourses()];

    // Filtera på kategori
    if (this.selectedSubject()) {
      courses = courses.filter(course => course.subject === this.selectedSubject());
    }

    // Visa alla kategorier
    if(this.selectedSubject() === "allCourses") {
      return this.allCourses()
    }

    // Filtrera på sökfras
    if(this.searchQuery()) {
      courses = courses.filter((course) => 
      course.courseName.toLowerCase().includes(this.searchQuery().toLowerCase()) ||
      course.courseCode.toLowerCase().includes(this.searchQuery().toLowerCase()));
    }

    // Sortera i bokstavsordning
    if(this.sortBy() === "courseCode") {
      courses.sort((a, b) => a.courseCode.localeCompare(b.courseCode));
    } if(this.sortBy() === "courseName") {
      courses.sort((a, b) => a.courseName.localeCompare(b.courseName));
    } if(this.sortBy() === "points") {
      courses.sort((a, b) => a.points - b.points);
    } if(this.sortBy() === "subject") {
      courses.sort((a, b) => a.subject.localeCompare(b.subject));
    }
      
    return courses;
  });

  // Räkna kurser
  countAllCourses = computed(() => this.allCourses().length);
  countFilteredCourses = computed(() => this.filteredCourses().length);

  // Paginering
  handlePageEvent(e: PageEvent) {
    this.currentPage.set(e.pageIndex);
    this.pageSize.set(e.pageSize);
  }

  pageSize = signal(10);
  currentPage = signal(0);

  pagedCourses = computed(() => {
    const start = this.currentPage() * this.pageSize();
    const end = start + this.pageSize();
    return this.filteredCourses().slice(start, end);
  });

  // Snackbar
  constructor(private snackBar: MatSnackBar) {}

  // Lägg till kursen i ramschema
  private scheduleService = inject(ScheduleService);

  addToProgram(course: CourseModel) {
    try {
      this.scheduleService.addCourse(course);
        this.snackBar.open('Kursen tillagd i ramschema','Stäng', {    
          duration: 5000,    
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          panelClass: 'custom-style',
        })
    } catch(err) {
      this.snackBar.open('' + err,'Stäng', {    
        duration: 5000,    
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: 'custom-style',
      })
    }
  }
}