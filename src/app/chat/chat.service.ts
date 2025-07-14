import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Message {
  text: string;
  fromSelf: boolean;
  fromUser?: string;
  toUser?: string;
  isGroup: boolean;
  imageUrl?: string; 
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  private messagesSubject = new BehaviorSubject<Message[]>([]);
  messages$ = this.messagesSubject.asObservable();

  private messages: Message[] = [];

  sendMessage(msg: Message) {
    this.messages.push(msg);
    this.messagesSubject.next(this.messages);
  }

  getMessages() {
    return this.messages;
  }
}
