import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItalianiComponent } from './italiani/italiani.component';
import { SpagnoliComponent } from './spagnoli/spagnoli.component';
import { FrancesiComponent } from './francesi/francesi.component';

const routes: Routes = [
  { path: 'italiani', component: ItalianiComponent },
  { path: 'spagnoli', component: SpagnoliComponent },
  { path: 'francesi', component: FrancesiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
