import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ItalianiComponent } from './italiani/italiani.component';
import { SpagnoliComponent } from './spagnoli/spagnoli.component';
import { FrancesiComponent } from './francesi/francesi.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'italiani', component: ItalianiComponent },
  { path: 'spagnoli', component: SpagnoliComponent },
  { path: 'francesi', component: FrancesiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
