import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SocketIOService } from '../socket-io.service';
import { Observable } from 'rxjs';
import { Message } from '../interfaces';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @ViewChild('chatInput') chatInput: ElementRef;

  messages: Message[] = [];
  messageHistory$: Observable<Message[]>;

  constructor(private socketIOService: SocketIOService) { }

  ngOnInit() {
    this.socketIOService.connect();
    this.messageHistory$ = this.socketIOService.getMessageHistory();
    this.messageHistory$.subscribe((messages) => {
      this.messages = messages;
    });
  }

  sendMessage() {
    const message = {
      text: this.chatInput.nativeElement.value,
      sender: 'You',
      timestamp: new Date()
    };
    this.socketIOService.sendMessage(message);
    this.chatInput.nativeElement.value = '';
  }
}
