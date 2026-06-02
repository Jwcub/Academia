import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Courses } from './courses/courses';
import { Program } from './program/program';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "courses", component: Courses },
    { path: "program", component: Program },
    { path: "**", redirectTo: "", pathMatch: "full" }
];
