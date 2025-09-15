import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Greet } from '@/packages/shared';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'angular-web';
  ngOnInit(){
    console.log(Greet('Yağız'));
  }
}
