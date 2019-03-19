import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OljanComponent } from './oljan.component';

describe('OljanComponent', () => {
  let component: OljanComponent;
  let fixture: ComponentFixture<OljanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OljanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OljanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
