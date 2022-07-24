import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Get Window Size, step 3
  windowSize: any;
  isMobile = false;
  width: number = window.innerWidth;
  height: number = window.innerHeight;
  mobileWidth = 760;

  @HostListener('window:resize', ['$event'])
  onResize(event): any {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;
    console.log(this.width, this.isMobile);
  }

  ngOnInit(): void {
    // Get Window Size
    this.isMobile = this.width < this.mobileWidth;
  }

  getAddress(place: {[key: string]: any}): void {
    console.log(place.formatted_address);
  }
}
