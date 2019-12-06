import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-section-image',
  templateUrl: './welcome-section-image.component.html',
  styleUrls: ['./welcome-section-image.component.scss']
})
export class WelcomeSectionImageComponent implements OnInit {

  @Input() image = '/assets/images/gallery/1.jpg';
  @Input() title = '';

  constructor() { }

  ngOnInit() {
  }

}
