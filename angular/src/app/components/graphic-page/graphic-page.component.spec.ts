import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicPageComponent } from './graphic-page.component';

describe('GraphicPageComponent', () => {
  let component: GraphicPageComponent;
  let fixture: ComponentFixture<GraphicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
