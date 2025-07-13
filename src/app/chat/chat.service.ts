import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
    private messageSubject = new Subject<string>();
  constructor() {}

  sendMessage(msg: string) {
    this.messageSubject.next(`You: ${msg}`);

    setTimeout(() => {
      this.messageSubject.next(`Bot: I received "${msg}"`);
    }, 1000);
  }

  getMessages(): Observable<string> {
    return this.messageSubject.asObservable();
  }
}

