import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-app';
  private scrolledPercentage: number = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const bodyHeight = document.body.clientHeight;

    this.scrolledPercentage = (scrollPosition / (bodyHeight - windowHeight)) * 100;
  }

  getProgressBarWidth(): string {
    return this.scrolledPercentage + '%';
  }
}
