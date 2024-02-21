import { Component, inject, OnInit } from '@angular/core';
import { MessageService } from "../message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  public messageService = inject(MessageService);

  constructor() { }

  ngOnInit(): void {
  }

}
