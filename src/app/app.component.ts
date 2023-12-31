import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterModule, 
    HeaderComponent, 
    FooterComponent,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CollegeFBArchive';

  isEnoughContent : boolean = false;
  @HostListener('window:scroll', ['event'])
  checkScroll(){
    this.isEnoughContent = window.innerHeight < document.body.scrollHeight;
  }
}
