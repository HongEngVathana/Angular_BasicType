import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { StructualComponent } from './components/structual/structual.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StructualComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularType';
  hello: string = 'Hello';
}
