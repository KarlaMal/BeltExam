import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllresComponent } from './allres/allres.component';
import { AllreviewsComponent } from './allreviews/allreviews.component';
import { NewresComponent } from './newres/newres.component';
import { UpdateComponent } from './update/update.component';
import { NewreviewComponent } from './newreview/newreview.component';


const routes: Routes = [
  { path: '', component: AllresComponent },
  { path: 'reviews/:id', component: AllreviewsComponent },
  { path: 'new', component: NewresComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'new/review/:id', component: NewreviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
