import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  swiperModules = [IonicSlides];
  constructor() { }
  onboardingScreens = [
    { text: 'We look forward to welcoming you and your child to our exciting world of financial education!' },
    { text: 'We look forward to welcoming you and your child to our exciting world of financial education!' },
    { text: 'We look forward to welcoming you and your child to our exciting world of financial education!' },
  ];
  ngOnInit() {
  }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

}
