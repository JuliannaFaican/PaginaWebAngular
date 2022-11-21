import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from 'src/components/a/a.component';
import { BComponent } from 'src/components/b/b.component';
import { DComponent } from 'src/components/d/d.component';


const routes: Routes = [
  {
    path: '', component: DComponent
  },
  {
    path: 'web1', component: AComponent
  },
  {
    path: 'web2', component: BComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
