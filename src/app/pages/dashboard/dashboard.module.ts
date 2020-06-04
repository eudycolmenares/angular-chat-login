import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from "./dashboard-routing.module";

import { ChatHeaderComponent } from "../../components/chat-header/chat-header.component";

@NgModule({
   imports: [
      CommonModule,
      DashboardRoutingModule,
   ],
   declarations: [
      ChatHeaderComponent
   ],
   exports: [
      ChatHeaderComponent
   ]
})

export class DashboardModule { }
