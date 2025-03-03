import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  isSidebarVisible = true;
  isLoggedIn=true;
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  @Output() logoutEvent=new EventEmitter<boolean>();

  logout(){
    this.logoutEvent.emit(false);
  }
}
