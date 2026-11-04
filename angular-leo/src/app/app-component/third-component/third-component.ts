import { Component } from '@angular/core';
import { FourthComponent } from './fourth-component/fourth-component';

@Component({
  imports: [FourthComponent],
  selector: 'app-third-component',
  styleUrl: './third-component.css',
  templateUrl: './third-component.html',
})
export class ThirdComponent {}
