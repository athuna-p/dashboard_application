import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatService, Message } from '../chat.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MaterialModule
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messageControl = new FormControl('');
  selectedUser: string | undefined = undefined;
  isGroup = true;
  selectedFile: File | null = null;

  messages: Message[] = [];
  users = ['Alice', 'Bob', 'Charlie']; // Mock users

  constructor(private chatService: ChatService, private router: Router) {
    this.chatService.messages$.subscribe(msgs => {
      this.messages = msgs.filter(m =>
        m.isGroup === this.isGroup &&
        (this.isGroup || m.toUser === this.selectedUser || m.fromUser === this.selectedUser)
      );
    });
  }

  selectGroup() {
    this.isGroup = true;
    this.selectedUser = undefined;
    this.updateMessages();
  }

  selectUser(user: string) {
    this.isGroup = false;
    this.selectedUser = user;
    this.updateMessages();
  }

  sendMessage() {
    const text = this.messageControl.value || '';

    if (text.trim() === '' && !this.selectedFile) return;

    let imageUrl: string | undefined;
    if (this.selectedFile) {
      imageUrl = URL.createObjectURL(this.selectedFile);
    }

    const message: Message = {
      text: text || '📎 Attachment',
      fromSelf: true,
      isGroup: this.isGroup,
      toUser: this.isGroup ? undefined : this.selectedUser,
      fromUser: 'Me',
      imageUrl: imageUrl
    };

    this.chatService.sendMessage(message);
    this.messageControl.reset();
    this.selectedFile = null;

    // Mock replies
    if (this.isGroup) {
      this.users.forEach(user => {
        setTimeout(() => {
          const reply: Message = {
            text: `Reply from ${user}: ${text}`,
            fromSelf: false,
            isGroup: true,
            fromUser: user
          };
          this.chatService.sendMessage(reply);
        }, 1000);
      });
    } else {
      setTimeout(() => {
        const reply: Message = {
          text: `Reply from ${this.selectedUser}: ${text}`,
          fromSelf: false,
          isGroup: false,
          fromUser: this.selectedUser
        };
        this.chatService.sendMessage(reply);
      }, 1000);
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  private updateMessages() {
    const allMessages = this.chatService.getMessages();
    this.messages = allMessages.filter(m =>
      m.isGroup === this.isGroup &&
      (this.isGroup || m.toUser === this.selectedUser || m.fromUser === this.selectedUser)
    );
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
