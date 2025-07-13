import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatService } from '../chat.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent {
  messages: { text: string; fromSelf: boolean; isGroup?: boolean }[] = [];
  messageControl = new FormControl('');
  isGroupChat = false; // <-- New flag

  sendMessage() {
    const text = this.messageControl.value;
    if (text && text.trim() !== '') {
      this.messages.push({ text, fromSelf: true, isGroup: this.isGroupChat });
      this.messageControl.reset();

      setTimeout(() => {
        this.messages.push({
          text: this.isGroupChat ? 'Group reply: ' + text : 'Reply: ' + text,
          fromSelf: false,
          isGroup: this.isGroupChat
        });
      }, 1000);
    }
  }

  toggleGroupChat() {
    this.isGroupChat = !this.isGroupChat;
  }
}
