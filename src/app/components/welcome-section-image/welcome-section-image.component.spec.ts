import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSectionImageComponent } from './welcome-section-image.component';

describe('WelcomeSectionImageComponent', () => {
  let component: WelcomeSectionImageComponent;
  let fixture: ComponentFixture<WelcomeSectionImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeSectionImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeSectionImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
