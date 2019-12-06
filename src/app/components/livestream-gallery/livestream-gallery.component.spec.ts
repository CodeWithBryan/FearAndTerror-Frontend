import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestreamGalleryComponent } from './livestream-gallery.component';

describe('LivestreamGalleryComponent', () => {
  let component: LivestreamGalleryComponent;
  let fixture: ComponentFixture<LivestreamGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivestreamGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivestreamGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
