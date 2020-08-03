import { NgModule } from '@angular/core';
import { DetailsUserComponent } from './component/details-user/details-user.component';
import { ListUserComponent } from './component/list-user/list-user.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListUserComponent,
    DetailsUserComponent
  ],
  exports: [
    ListUserComponent,
    DetailsUserComponent
  ]
})
export class UserModule {}
