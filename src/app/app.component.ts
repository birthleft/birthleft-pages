import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foresight';

  redirectToDiscord() {
    window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=1075089068993544192&permissions=8&scope=bot%20applications.commands';
  }

  redirectToGitHub() {
    window.location.href = 'https://github.com/birthleft/foresight-project';
  }
}
