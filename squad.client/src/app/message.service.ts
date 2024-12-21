import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

interface Message {
  text: string;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messagesCollection: AngularFirestoreCollection<Message>;

  constructor(private afs: AngularFirestore) {
    this.messagesCollection = this.afs.collection<Message>('messages');
  }

  getMessages(): Observable<string[]> {
    return this.messagesCollection.valueChanges().pipe(
      map((messages) => messages.map((message) => message.text))
    );
  }

  saveMessage(message: string): Promise<void> {
    // Логика сохранения сообщения
    return new Promise((resolve) => {
      // Сохранение сообщения
      resolve();
    });
  }

}
