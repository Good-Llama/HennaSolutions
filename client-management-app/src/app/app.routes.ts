import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreationComponent } from './client-creation/client-creation.component';
import { ClientMeetingsComponent } from './client-meetings/client-meetings.component';

export const routes: Routes = [
  { path: 'client-creation', component: ClientCreationComponent },
  { path: 'client-meetings', component: ClientMeetingsComponent },
  { path: '', redirectTo: '/client-creation', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
s