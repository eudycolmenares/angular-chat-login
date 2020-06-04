import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { ChatHeaderComponent } from "../../components/chat-header/chat-header.component";

@NgModule({
   imports: [
      CommonModule,
      DashboardRoutingModule,
   ],
   declarations: [
      DashboardComponent,
      ChatHeaderComponent
   ],
   exports: [
   ]
})

export class DashboardModule { }
