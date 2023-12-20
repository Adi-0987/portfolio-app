import { Component,HostBinding,OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints } from '@angular/cdk/layout'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private BreakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
  }
  openResume() {
    // Replace 'resume.pdf' with the path to your PDF file
    const pdfUrl = 'assets/AdityaBhardwaj_Resume.pdf';

    // Open the PDF in a new tab
    window.open(pdfUrl, '_blank');
  }
}
