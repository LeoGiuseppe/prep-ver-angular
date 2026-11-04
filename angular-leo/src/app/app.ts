import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app-component/app-component';
import { SecondComponent } from './second-component/second-component';
import { ThirdComponent } from './third-component/third-component';
import { FourthComponent } from './fourth-component/fourth-component';

@Component({
  imports: [RouterOutlet,AppComponent,SecondComponent,ThirdComponent,FourthComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-leo');
}
