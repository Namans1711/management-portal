import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseOrgComponent } from './choose-org/choose-org.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: '', component: ChooseOrgComponent
  }
]


@NgModule({
  declarations: [
    ChooseOrgComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class ChooseOrgModule {}
