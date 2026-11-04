import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app-component/app-component';
import { SecondComponent } from './app-component/second-component/second-component';
import { ThirdComponent } from './app-component/third-component/third-component';
import { FourthComponent } from './app-component/third-component/fourth-component/fourth-component';

@Component({
  imports: [RouterOutlet,AppComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-leo');
}
