import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'currency-converter-app';
}
