import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Message } from './interfaces';


@Injectable({
  providedIn: 'root'
})
export class SocketIOService {
  constructor(private socket: Socket) { }

  connect() {
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  onMessage(callback: (message: Message) => void) {
    this.socket.on('new-message', callback);
  }

  sendMessage(message: Message) {
    this.socket.emit('send-message', message);
  }

  getMessageHistory(): Observable<Message[]> {
    return new Observable<Message[]>((observer) => {
      this.socket.on('message-history', (messages: Message[]) => {
        observer.next(messages);
      });

      return () => {
        this.socket.off('message-history');
      };
    });
  }
}
