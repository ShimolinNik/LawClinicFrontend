import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InputsComponent } from './inputs/inputs.component';
import { DroplistComponent } from './droplist/droplist.component';
import { CardsComponent } from './cards/cards.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
  {path: 'cards', component: CardsComponent,
  children: [
    {path: ':id', component: DescriptionComponent}
  ]
  },
  {path: '**', redirectTo :'notFound', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
