import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";

import { ChatHeaderComponent } from "../../components/chat-header/chat-header.component";
import { ChatMenuComponent } from "../../components/chat-menu/chat-menu.component";
import { ChatChatsComponent } from "../../components/chat-chats/chat-chats.component";
import { ChatMessagesComponent } from "../../components/chat-messages/chat-messages.component";
//
import { AvatarComponent } from "../../components/avatar.component";

@NgModule({
   imports: [
      CommonModule,
      DashboardRoutingModule,
   ],
   declarations: [
      DashboardComponent,
      ChatHeaderComponent,
      ChatMenuComponent,
      ChatChatsComponent,
      ChatMessagesComponent,
      AvatarComponent
   ],
   exports: [
   ]
})

export class DashboardModule { }
