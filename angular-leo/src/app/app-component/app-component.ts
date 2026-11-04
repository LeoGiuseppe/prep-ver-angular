import { Component } from '@angular/core';
import { SecondComponent } from './second-component/second-component';
import { ThirdComponent } from './third-component/third-component';

@Component({
  imports: [SecondComponent,ThirdComponent],
  selector: 'app-app-component',
  styleUrl: './app-component.css',
  templateUrl: './app-component.html',
})
export class AppComponent {}
