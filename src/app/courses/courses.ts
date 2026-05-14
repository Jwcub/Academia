import { Component, computed, inject, signal } from '@angular/core';
import { CourseService } from '../services/course.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-courses',
  imports: [MatPaginatorModule],
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

  // Filtrera kurser
  selectedCategory = signal<string>("");
  searchQuery = signal<string>("");

  onCategoryChange(event: Event) {
    const element = event.target as HTMLSelectElement;
    this.selectedCategory.set(element.value);
  }

  filteredCourses = computed(() => {
    let courses = this.allCourses();

    // Filtera på kategori
    if (this.selectedCategory()) {
      courses = courses.filter(course => course.subject === this.selectedCategory());
    }

    // Filtrera på sökfras
    if(this.searchQuery()) {
      courses = courses.filter((course) => 
      course.courseName.toLowerCase().includes(this.searchQuery()) ||
      course.courseCode.toLowerCase().includes(this.searchQuery()));
    }

    return courses;
  });

  SortOnCode() {
    this.filteredCourses().sort((a, b) => b.courseCode.localeCompare(a.courseCode));
  }






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
}



