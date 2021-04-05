import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'members',
        loadChildren: () => import('../members/members.module').then(m => m.MembersPageModule)
      },
      {
        path: 'students',
        loadChildren: () => import('../students/students.module').then(m => m.StudentsPageModule)
      },
      {
        path: 'courses',
        loadChildren: () => import('../courses/courses.module').then( m => m.CoursesPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
