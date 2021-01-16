import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserslistComponent } from './userslist/userslist.component';
import { HighlighterDirective } from './highlighter.directive';


@NgModule({
  declarations: [UserslistComponent, HighlighterDirective],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports:[UserslistComponent]
})
export class UsersModule { }
